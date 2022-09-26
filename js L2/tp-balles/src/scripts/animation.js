import Ball from './ball';

/* TYPE Animation */
export default class Animation {

  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.image = [];
    this.raf = null;
    this.inMove = 0;
  }

  newBall(){
    let x = Ball.alea(this.canvas.width-48);
    let y = Ball.alea(this.canvas.height-48);
    this.image.push(new Ball(x,y));
  }

  moveAndDraw(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.image.forEach(elt => elt.move(this.canvas));
    this.image.forEach(elt => elt.draw(this.context));
    this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }

  /* start the animation or stop it if previously running */
  startAndStop() {
    if(this.inMove == 0){
      this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
      this.inMove = 1;
    }else{
      window.cancelAnimationFrame(this.raf);
      this.inMove = 0;
    }
  }
}
