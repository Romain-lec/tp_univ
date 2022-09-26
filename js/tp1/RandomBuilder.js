import JsonBuilder from "./JsonBuilder.js";

export default class RandomBuilder extends JsonBuilder {

    constructor(request, response){
        super(request,response);
    }

    //OverRide
    makeJsonDict(){
        let dict = {};
        dict["randomValue"] = Math.floor(Math.random() * 101);
        dict["date"] =this.toDayDate();
        return dict;
    }
}