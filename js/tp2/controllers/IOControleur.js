
export default class IOCantroleur {

    #io;
    #MapSocketInterval;
    #interval;


    constructor(io){
        this.#io = io;
        this.#MapSocketInterval = new Map();
        this.#interval == null;
    }

    handdleConnection(socket) {
        /*if (this.#interval == null){
            this.#interval = setInterval(() => this.makeEmit(socket),2000);
        }*/
        const intervaleRandomInt = setInterval(() => {
            socket.emit('randomInt',this.generateRandomIntBetween(2,6));
            console.log(socket.id);
        },2000)   //un intervale par socket

        socket.on('disconnect',() => this.handleDeconnection(socket.id));

        this.#MapSocketInterval.set(socket.id,intervaleRandomInt);
    }

    handleDeconnection(socketId) {
        clearInterval(this.#MapSocketInterval.get(socketId));
        this.#MapSocketInterval.delete(socketId);
    }

    generateRandomIntBetween(min,max){
        return Math.floor(Math.random()*(max-min)) + min;
    }

    makeEmit(socket){
        this.#io.emit('randomInt',this.generateRandomIntBetween(2,6));
        console.log(socket.id)
    }
}