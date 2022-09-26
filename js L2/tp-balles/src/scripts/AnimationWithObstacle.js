import Animation from './animation';

export default class AnimationWithObstacle extends Animation{

    constructor(canvas,obstacle){
        super(canvas);
        this.obstacle = obstacle;
    }

    moveAndDraw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.obstacle.move(this.canvas);
        this.obstacle.draw(this.context);
        this.image.forEach(elt => elt.move(this.canvas));
        this.image = this.image.filter((elt) => !elt.collisionWith(this.obstacle));
        this.image.forEach(elt => elt.draw(this.context));
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
      }

          //  dans la classe AnimationWithObstacle
    keyDownActionHandler(event) {
       switch (event.key) {
           case "ArrowLeft":
           case "Left":
               this.obstacle.moveLeft();
               break;
           case "ArrowRight":
           case "Right":
               this.obstacle.moveRight();
               break;
           case "ArrowUp":
           case "Up":
               this.obstacle.moveUp();
               break;
           case "ArrowDown":
           case "Down":
               this.obstacle.moveDown();
               break;
           default: return;
       }
       event.preventDefault();
    }

    
    //  dans la classe AnimationWithObstacle
keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
            case "ArrowRight":
            case "Right":
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":
                this.obstacle.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }
}