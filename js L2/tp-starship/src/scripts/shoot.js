import Mobile from './mobile.js';
import shootImgSrc from '../assets/images/tir.png';
import theGame from './game.js';

export default class Shoot extends Mobile{

    static SHOOT_WIDTH = 32;
    static SHOOT_HEIGHT = 8;

    constructor(x,y){
        super(x,y,8,0);
        this.image = this.createImageShoot();
    }

    move(box){
        if (this.x <= box.width - Shoot.SHOOT_WIDTH) {
            this.x = Math.max(0, this.x + this.deltaX);
        }else{
            theGame.shoot = theGame.shoot.filter(elt => elt.x <= box.width - Shoot.SHOOT_WIDTH);
        }
    }

    createImageShoot(){
        const image= new Image();
        image.width=Shoot.SHOOT_WIDTH;
        image.height=Shoot.SHOOT_HEIGHT;
        image.src=shootImgSrc;
        return image;
    }

}