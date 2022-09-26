import ResponseBuilder from "./ResponseBuilder.js";

export default class JsonBuilder extends ResponseBuilder {

    #request;
    #response;
    #urlSearchParams;
    #date;

    constructor(request, response) {
        super(request, response);
        this.#request = request;
        this.#response = response;
        this.#urlSearchParams = new URLSearchParams(this.#request.url);
        this.#date = new Date();
    }

    handleRequest(){
        this.makeHeader();
        this.makeContent();
        this.#response.end();
    }

    makeHeader(){
        this.#response.statusCode = 200;
        this.#response.setHeader( 'Content-Type' , 'application/json');
    }

    makeContent(){
        this.#response.write(JSON.stringify(this.makeJsonDict()));
    }

    toDayDate(){
        return this.#date.getDate()+"/"+ (this.#date.getMonth()+1)+"/"+this.#date.getFullYear()+" at "+this.#date.getHours()+":"+this.#date.getMinutes()+":"+this.#date.getSeconds();
    }

    makeJsonDict(){
        let dict = {};
        this.#urlSearchParams.forEach((value,key) => {
            if (value != "") {
                dict[key] = value;
            }
        });
        dict["date"] =this.toDayDate();
        return dict;
    }
}