import StarShip from './starship.js';
import  Saucer from './saucer.js';
import Shoot from './shoot.js'


class Game {
    
    constructor(){
        this.canvas = document.getElementById("stars");
        this.context = this.canvas.getContext("2d");
        this.interval_wave = 750;
        this.ship = new StarShip(40,this.canvas.height/2); 
        this.saucers = [];
        this.shoot = [];
    }

    moveAndDraw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ship.move(this.canvas);
        this.ship.draw(this.context);
        this.saucers.forEach(elt => elt.move(this.canvas));
        this.saucers.forEach(elt => elt.draw(this.context));
        this.shoot.forEach(elt => elt.move(this.canvas));
        this.shoot.forEach(elt => elt.draw(this.context));
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }
    
    keyDownAction(event){
        switch (event.key) {
            case "ArrowUp":
            case "Up":
                this.ship.moveUp(this.canvas);
                break;
            case "ArrowDown":
            case "Down":
                this.ship.moveDown(this.canvas);
                break;
            default: return;
        }
    }

    keyUpAction(event){
        switch(event.key){
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down": 
                this.ship.stopMoving();
                break;
            case " ":
            case "Spacebar":
                this.shoot.push(new Shoot(this.ship.x + StarShip.STARSHIP_WIDTH, this.ship.y + (StarShip.STARSHIP_HEIGHT/2)));
                break;
            default : return; 
        }
    }

    static alea(n){
        return Math.floor(Math.random()*n);
    }

    addSaucer(){
        this.saucers.push(new Saucer(this.canvas.width + 10 , Game.alea(this.canvas.height-36)+1));
    }

    score(x){
        let points = document.getElementById("score");
        let nb_points = parseInt(points.innerHTML);
        if(nb_points + x < 0){
            nb_points = 0
        }else{
            nb_points  = nb_points + x;
        }
        points.innerHTML = nb_points;
    }
}


// crée et exporte l'instance unique de Game
const theGame = new Game();
export default theGame;
