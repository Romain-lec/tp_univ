import ResponseBuilder from "./ResponseBuilder.js";
import fs from 'fs';

export default class PublicBuilder extends ResponseBuilder {

    #response;
    #request;

    constructor(request, response) {
        super(request, response);
        this.#response = response;
        this.#request = request;
    }

    makeHeader(){
        this.#response.statusCode = 200;
        this.#response.setHeader( 'Content-Type' , 'text/plain');
    }

    makeFooter(){
        this.#response.write("\n\n"+this.toDayDate());
    }

    makeContent(){

        try {
            fs.accessSync("."+this.getPath());
            this.#response.write(fs.readFileSync("./"+this.getPath()));
        } catch (error) {
            new ResponseBuilder(this.#request,this.#response).handleRequest();
        }
    }
}