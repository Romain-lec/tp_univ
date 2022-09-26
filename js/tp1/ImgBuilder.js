import ResponseBuilder from "./ResponseBuilder.js";

export default class ImgBuilder extends ResponseBuilder {

    #response;

    constructor(request, response) {
        super(request, response);
        this.#response = response;
    }

    makeHeader(){
        this.#response.statusCode = 200;
        this.#response.setHeader( 'Content-Type' , 'text/html');
        this.#response.write("<html> <head> <title>First</title> <link href=\"./public/style/style.css\" rel=\"stylesheet\" type=\"text/css\"> </head> <body>");
    }

    makeContent(){
        this.#response.write("<img src=\"./public/img/timoleon_oceanie.jpg\" alt=\"timoleon bien sur\">");
    }
}