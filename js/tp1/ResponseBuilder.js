import http from 'http'
import {URL} from 'url' 

export default class ResponseBuilder{

    #request;
    #response;
    #path;
    #date;

    constructor(request, response) {
        this.#request = request;
        this.#response = response;
        this.#path = new URL(this.#request.url, `http:${request.headers.host}`).pathname;
        this.#date = new Date();
    }

    handleRequest(){
        this.makeHeader();
        this.makeContent();
        this.makeFooter();
        this.#response.end();
    }

    makeHeader(){
        this.#response.statusCode = 404;
        this.#response.setHeader( 'Content-Type' , 'text/html');
        this.#response.write("<html> <head> <title>Error</title> </head> <body>");
    }

    makeContent(){
        this.#response.write("<p>404 : page "+this.#path+" not found</p>");
    }

    makeFooter(){
        this.#response.write("<footer>"+ this.toDayDate() +"</footer></body> </html>");
    }

    toDayDate(){
        return this.#date.getDate()+"/"+ (this.#date.getMonth()+1)+"/"+this.#date.getFullYear()+" at "+this.#date.getHours()+":"+this.#date.getMinutes()+":"+this.#date.getSeconds();
    }

    getPath(){
        return this.#path;
    }
}