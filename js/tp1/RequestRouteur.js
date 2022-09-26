import { URL } from 'url';
import ResponseBuilder from './ResponseBuilder.js';
import FirstBuilder from './FirstBuilder.js';
import SecondBuilder from './SecondBuilder.js';
import JsonBuilder from './JsonBuilder.js';
import RandomBuilder from './RandomBuilder.js';
import PublicBuilder from './PublicBuilder.js';
import ImgBuilder from './ImgBuilder.js';

export default class RequestController {

  #request;
  #response;
  #url;

  constructor(request, response) {
    this.#request = request,
    this.#response = response;
    this.#url = new URL(request.url, `http:${request.headers.host}`);
  }

  routeur(){
    if (this.#url.pathname == "/first"){
      new FirstBuilder(this.#request,this.#response).handleRequest();
    }else if (this.#url.pathname == "/second"){
      new SecondBuilder(this.#request,this.#response).handleRequest();
    }else if (this.#url.pathname == "/json"){
      new JsonBuilder(this.#request,this.#response).handleRequest();
    }else if (this.#url.pathname == "/random"){
      new RandomBuilder(this.#request,this.#response).handleRequest();
    }else if (this.#url.pathname == "/img"){
      new ImgBuilder(this.#request,this.#response).handleRequest();
    }else if (this.#url.pathname.substring(0,7) == "/public"){
      new PublicBuilder(this.#request,this.#response).handleRequest();
    }else{
      new ResponseBuilder(this.#request,this.#response).handleRequest();
    }
  }
}