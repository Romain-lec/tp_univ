import Mobile from './mobile.js';
import starshipImgSrc from '../assets/images/vaisseau-ballon-petit.png';
import MoveState from './movestate.js';

export default class StarShip extends Mobile{

    static STARSHIP_WIDTH = 48;
    static STARSHIP_HEIGHT = 39;

    constructor(x,y){
        super(x,y,0,8);
        this.image = this.createImageStarship();
        this.moving = MoveState.NONE;
    }

    get up(){
        return this.moving === MoveState.UP;
    }

    get down(){
        return this.moving === MoveState.DOWN;
    }

    moveUp() {
        this.deltaY = -8;
        this.moving = MoveState.UP;
    }
    moveDown() {
        this.deltaY = 8;
        this.moving = MoveState.DOWN;
    }

    move(box){
        if (this.up){
            this.y = Math.max(0, this.y + this.deltaY);
        }
        if (this.down) {
            this.y = Math.min(box.height - StarShip.STARSHIP_HEIGHT, this.y + this.deltaY);
        }
    }

    createImageStarship(){
        const image= new Image();
        image.width=StarShip.STARSHIP_WIDTH;
        image.height=StarShip.STARSHIP_HEIGHT;
        image.src=starshipImgSrc;
        return image;
    }

    stopMoving() {
        this.moving = MoveState.NONE;
    }
}
