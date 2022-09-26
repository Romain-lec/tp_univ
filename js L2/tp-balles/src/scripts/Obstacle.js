class MoveState{
    static get LEFT() {return 0};
    static get RIGHT() {return 1};
    static get NONE() {return 2};
    static get UP() {return 3};
    static get DOWN() {return 4};
}

export default class Obstacle{

    constructor(x,y,context){
        this.x = x;
        this.y = y;
        this.width = 48;
        this.height = 48;
        this.context = context;
        this.moving;
    }

    draw(context){
        context.fillRect(this.x,this.y,this.width,this.height);
    }

    //  dans la classe Obstacle
    moveLeft() {
        this.shiftX = - 10;
        this.moving = MoveState.LEFT;
    }
    moveRight() {
        this.shiftX = + 10;
        this.moving = MoveState.RIGHT;
    }
    moveUp() {
        this.shiftY = - 10;
        this.moving = MoveState.UP;
    }
    moveDown() {
        this.shiftY = + 10;
        this.moving = MoveState.DOWN;
    }
    
    move(box) {              // déplace sans sortir des limites de *box*
        if (this.moving === MoveState.LEFT) {
            this.x = Math.max(0, this.x + this.shiftX);
        }
        if (this.moving === MoveState.RIGHT) {
            this.x = Math.min(box.width - this.width, this.x + this.shiftX);
        }
        if (this.moving === MoveState.UP) {
            this.y = Math.max(0, this.y + this.shiftY);
        }
        if (this.moving === MoveState.DOWN) {
            this.y = Math.min(box.height - this.height, this.y + this.shiftY);
        }
    }
        //  dans la classe Obstacle
    stopMoving() {
        this.moving = MoveState.NONE;
    }
}