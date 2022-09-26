import http from 'http';
import RequestController from './controllers/requestController.js';
import {Server as ServerIO} from 'socket.io'
import IOCantroleur from './controllers/IOControleur.js';


const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);
const io = new ServerIO(server);
const ioControleur = new IOCantroleur(io);

io.on('connection',socket => ioControleur.handdleConnection(socket));

server.listen(8080);
