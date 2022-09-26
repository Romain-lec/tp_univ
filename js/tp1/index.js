import http, { request } from 'http';
import RequestRouteur from './RequestRouteur.js'


const server = http.createServer(
    (request, response) => new RequestRouteur(request,response).routeur()
    );

server.listen(8080);