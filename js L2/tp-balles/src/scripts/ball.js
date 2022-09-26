
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

    static BALL_WIDTH = 48;
    
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.deltaX = (Ball.alea(5)+1)*(-1)**Ball.alea(2);
        this.deltaY = (Ball.alea(5)+1)*(-1)**Ball.alea(2);
        this.image = this.createImage(); 
    }

    static alea(n){
        return Math.floor(Math.random()*n);
    }

    draw(context) {
	    context.drawImage(this.image,this.x,this.y)
    }

    move(canvas){
        if(this.x+this.deltaX+Ball.BALL_WIDTH > canvas.width || this.x+this.deltaX < 0){
            this.deltaX = -this.deltaX;
        }
        if(this.y+this.deltaY+Ball.BALL_WIDTH > canvas.height || this.y+this.deltaY < 0){
            this.deltaY = -this.deltaY;
        }
        this.x = this.x + this.deltaX;
        this.y = this.y + this.deltaY;
    }


    /* crée l'objet Image à utiliser pour dessiner cette balle */
    createImage() {
  	const ballImg = new Image();
	ballImg.width = Ball.BALL_WIDTH;
	ballImg.src = ballImgSrc;
	return ballImg;
    }

    collisionWith(Obstacle){
        return (Math.abs(this.x-Obstacle.x) <= 48 && Math.abs(this.y-Obstacle.y) <= 48);
    }

}
