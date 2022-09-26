import Ball from './Ball.js';
import Paddle from './Paddle.js';

/**
 * a Game animates a ball bouncing in a canvas
 */
export default class Game {

  /**
   * build a Game
   *
   * @param  {Canvas} canvas the canvas of the game
   */
  constructor(canvas) {

    this.io = io();

    this.raf = null;
    this.canvas = canvas;
    this.paddle = new Paddle(0, this.canvas.height/2 - 44, this)
    this.paddle2 = new Paddle(this.canvas.width - 28 , this.canvas.height/2 - 44, this)
    this.ball = new Ball(this.canvas.width/2 - 12, this.canvas.height/2 - 12, this, this.paddle,this.paddle2);
    window.addEventListener('keydown',this.keyDownAction.bind(this));
    window.addEventListener('keyup',this.keyUpAction.bind(this));
    this.playerNumber = document.getElementById('playerNumber');
    this.io.on("start", () => this.animate());
    this.startBallPlace();
  }

  /** start this game animation */
  start() {
    this.ball.resetPoint();
    this.io.emit('playerPlace');
    this.io.on('place', (n) => {this.playerNumber.value = n;});
    this.io.on("moveUP", () => {this.paddle2.moveUp();this.paddle2.move()});
    this.io.on("moveDOWN", () => {this.paddle2.moveDown();this.paddle2.move()});
    this.io.on("moveSTOP", () => {this.paddle2.stopMoving();this.paddle2.move()});
    this.io.on("moveLaunch", () => {this.ball.launchBall();this.paddle2.move()});
    this.io.on("resetPoint", () => this.ball.resetPoint());
    this.io.on("stop", () => window.cancelAnimationFrame(this.raf));
    this.ball.getPlayerPlace(this.playerNumber.value);
  }
  /** stop this game animation */
  stop() {
    window.cancelAnimationFrame(this.raf);
    this.playerNumber.value = "deconnected";
    this.ball.resetPoint();
    this.io.disconnect();
  }

  /** animate the game : move and draw */
  animate() {
    this.moveAndDraw();
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
  }
  /** move then draw the bouncing ball */
  moveAndDraw() {
    const ctxt = this.canvas.getContext("2d");
    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw and move the ball
    this.ball.move();
    this.paddle.draw(ctxt);
    this.paddle2.draw(ctxt);
    this.ball.draw(ctxt);
  }

  keyDownAction(event){
    switch (event.key) {
        case "ArrowUp":
        case "Up":
            this.paddle.moveUp();
            this.io.emit("move","up");
            //this.paddle2.moveUp();
            break;
        case "ArrowDown":
        case "Down":
            this.paddle.moveDown();
            this.io.emit("move","down");
            //this.paddle2.moveDown();
            break;
        default: return;
    }
    this.paddle.move();
    //this.paddle2.move();
  }

  keyUpAction(event){
      switch(event.key){
          case "ArrowUp":
          case "Up":
          case "ArrowDown":
          case "Down": 
              this.paddle.stopMoving();
              this.io.emit("move","stop");
              //this.paddle2.stopMoving();
              break;
          case " ":
          case "Spacebar":
              this.ball.launchBall();
              this.io.emit("move","launch");
              break;
          default : return; 
      }
      this.paddle.move();
      //this.paddle2.move();
  }

  startBallPlace(){
    if (this.playerNumber.value == "1"){
      this.ball.x = this.paddle.width+1;
      this.ball.y = this.paddle.y + (this.paddle.height/2) - this.ball.height/2;
    }else{
      this.ball.x = this.paddle2.x - this.paddle2.width;
      this.ball.y = this.paddle2.y + (this.paddle2.height/2) - this.ball.height/2;
    }
    const ctxt = this.canvas.getContext("2d");
    this.ball.draw(ctxt);
  }

}
