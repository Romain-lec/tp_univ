import ResponseBuilder from "./ResponseBuilder.js";

export default class SecondBuilder extends ResponseBuilder {

    #response;

    constructor(request, response) {
        super(request, response);
        this.#response = response;
    }

    makeHeader(){
        this.#response.statusCode = 200;
        this.#response.setHeader( 'Content-Type' , 'text/html');
        this.#response.write("<html> <head> <title>Second</title> </head> <body>");
    }

    makeContent(){
        this.#response.write("<p>content of seconf page</p>");
    }
}