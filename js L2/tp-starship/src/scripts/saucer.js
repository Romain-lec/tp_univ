import Mobile from './mobile.js';
import saucerImgSrc from '../assets/images/flyingSaucer-petit.png';
import theGame from './game.js';

export default class Saucer extends Mobile{

    static SAUCER_WIDTH= 48;
    static SAUCER_HEIGHT= 36;
    constructor(x,y){
        super(x,y,-3,0)
        this.image = this.createImageSaucer();
    }

    move(box){
        if (this.x >= -Saucer.SAUCER_WIDTH) {
            this.x = Math.max(-Saucer.SAUCER_WIDTH-1, this.x + this.deltaX);
        }else{
            theGame.score(-1000);
            theGame.saucers = theGame.saucers.filter(elt => elt.x >=-Saucer.SAUCER_WIDTH);
        }
        theGame.shoot = theGame.shoot.filter(elt => !this.collisionWith(elt));
        if (this.deltaY === 3) {
            if (this.y <= box.height) {
                this.y = Math.min(box.height + Saucer.SAUCER_HEIGHT, this.y + this.deltaY);
            }else{
                theGame.score(200);
                theGame.saucers = theGame.saucers.filter(elt => elt.y <= box.height);
            }
        }
    }

    createImageSaucer(){
        const image= new Image();
        image.width=Saucer.SAUCER_WIDTH;
        image.height=Saucer.SAUCER_HEIGHT;
        image.src=saucerImgSrc;
        return image;
    }

    collisionWith(Obstacle){
        if (Math.abs(this.x-Obstacle.x) <= Saucer.SAUCER_WIDTH && Math.abs(this.y-Obstacle.y) <= Saucer.SAUCER_HEIGHT) {
            this.deltaX = 0;
            this.deltaY = 3;
        }
        return (Math.abs(this.x-Obstacle.x) <= Saucer.SAUCER_WIDTH && Math.abs(this.y-Obstacle.y) <= Saucer.SAUCER_HEIGHT);
    }
}