import Mobile from './Mobile.js';


// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const SHIFT_X = 0;
const SHIFT_Y = 0;
const SHIFT_TOTAL = 8;


/**
 * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game's canvas)
 */
export default class Ball extends Mobile {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   * @param  {Paddle}paddle   the Paddle this Ball belong to
   */
  constructor(x, y, theGame, paddle, paddle2,io) {
    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
    this.paddle = paddle;
    this.paddle2 = paddle2;
    this.io = io;
    this.totalSpeedXY = SHIFT_X + SHIFT_Y;
    this.pointPlayer1 = document.getElementById("scorePlayer1");
    this.pointPlayer2 = document.getElementById("scorePlayer2");
    this.playerPlace;
  }


  /**
   * when moving a ball bounces inside the limit of its game's canvas
   */
  move() {
    if (this.y <= 0 || (this.y+this.height >= this.theGame.canvas.height)) {
      this.shiftY = - this.shiftY;    // rebond en haut ou en bas
    }
    else if (this.x <= 0 || this.x + this.width >= this.theGame.canvas.width ) {
      this.stopMoving()    // rebond en gauche ou à droite

      if (this.x <= 0){
        this.x = this.paddle.width+1;
        this.y = this.paddle.y + (this.paddle.height/2) - this.height/2;
        if(this.playerPlace == "1"){
          this.addPointPlayer2();
        }else{
          this.addPointPlayer1();
        }
        
      }else{
        this.x = this.paddle2.x - this.paddle2.width;
        this.y = this.paddle2.y + (this.paddle2.height/2) - this.height/2;
        if(this.playerPlace == "2"){
          this.addPointPlayer2();
        }else{
          this.addPointPlayer1();
        }
        
      }


    }else if ((this.x <= this.paddle.width && (this.y + this.height >= this.paddle.y && this.y <= (this.paddle.y + this.paddle.height))) || (this.x >= this.paddle2.x && (this.y + this.height >= this.paddle2.y && this.y <= (this.paddle2.y + this.paddle2.height)))){
      
      if(this.x <= this.paddle.width && (this.y + this.height >= this.paddle.y && this.y <= (this.paddle.y + this.paddle.height))){
        this.x = this.paddle.width+1;
      }else{
        this.x = this.paddle2.x -1;
      }
        
      this.midY = this.y + this.img.height/2;

      let PaddleYDiv8 = (this.paddle.height)/10;

      if(((this.midY >= this.paddle.y && this.midY <= this.paddle.y + PaddleYDiv8 && this.x <this.theGame.canvas.width/2) || (this.midY >= this.paddle2.y && this.midY <= this.paddle2.y + PaddleYDiv8 && this.x >this.theGame.canvas.width/2))){
        this.shiftY = -4;
      }else if(((this.midY > this.paddle.y + PaddleYDiv8 && this.midY <= this.paddle.y + PaddleYDiv8*2 && this.x <this.theGame.canvas.width/2) || (this.midY > this.paddle2.y + PaddleYDiv8 && this.midY <= this.paddle2.y + PaddleYDiv8*2 && this.x >this.theGame.canvas.width/2))){
        this.shiftY = -3;
      }else if(((this.midY > this.paddle.y + PaddleYDiv8*2 && this.midY <= this.paddle.y + PaddleYDiv8*3 && this.x <this.theGame.canvas.width/2) || (this.midY > this.paddle2.y + PaddleYDiv8*2 && this.midY <= this.paddle2.y + PaddleYDiv8*3 && this.x >this.theGame.canvas.width/2))){
        this.shiftY = -2;
      }else if(((this.midY > this.paddle.y + PaddleYDiv8*3 && this.midY <= this.paddle.y + PaddleYDiv8*4 && this.x <this.theGame.canvas.width/2) || (this.midY > this.paddle2.y + PaddleYDiv8*3 && this.midY <= this.paddle2.y + PaddleYDiv8*4 && this.x >this.theGame.canvas.width/2))){
        this.shiftY = -1;
      }else if(((this.midY > this.paddle.y + PaddleYDiv8*4 && this.midY <= this.paddle.y + PaddleYDiv8*6 && this.x <this.theGame.canvas.width/2) || (this.midY > this.paddle2.y + PaddleYDiv8*4 && this.midY <= this.paddle2.y + PaddleYDiv8*6 && this.x >this.theGame.canvas.width/2))){
        this.shiftY = 0;
      }else if(((this.midY > this.paddle.y + PaddleYDiv8*6 && this.midY <= this.paddle.y + PaddleYDiv8*7 && this.x <this.theGame.canvas.width/2) || (this.midY > this.paddle2.y + PaddleYDiv8*6 && this.midY <= this.paddle2.y + PaddleYDiv8*7 && this.x >this.theGame.canvas.width/2))){
        this.shiftY = 1;
      }else if(((this.midY > this.paddle.y + PaddleYDiv8*7 && this.midY <= this.paddle.y + PaddleYDiv8*8 && this.x <this.theGame.canvas.width/2) || (this.midY > this.paddle2.y + PaddleYDiv8*7 && this.midY <= this.paddle2.y + PaddleYDiv8*8 && this.x >this.theGame.canvas.width/2))){
        this.shiftY = 2;
      }else if( ((this.midY > this.paddle.y + PaddleYDiv8*8 && this.midY <= this.paddle.y + PaddleYDiv8*9 && this.x <this.theGame.canvas.width/2) || (this.midY > this.paddle2.y + PaddleYDiv8*8 && this.midY <= this.paddle2.y + PaddleYDiv8*9 && this.x >this.theGame.canvas.width/2))){
        this.shiftY = 3;
      }else{
        this.shiftY = 4;
      }

      if(this.shiftX < 0){
        this.shiftX = SHIFT_TOTAL - Math.abs(this.shiftY);
      }else{
        this.shiftX = -(SHIFT_TOTAL - Math.abs(this.shiftY));
      }
    }
    super.move();
  }

  addPointPlayer1(){
    this.pointPlayer1.value = parseInt(this.pointPlayer1.value) + 1;
  }

  addPointPlayer2(){
    this.pointPlayer2.value = parseInt(this.pointPlayer2.value) + 1;
  }

  launchBall(){
    if(this.shiftX == 0 && this.shiftY == 0){
      if(this.x < this.theGame.canvas.width/2){
        this.shiftX = SHIFT_TOTAL;
      }else{
        this.shiftX = - SHIFT_TOTAL;
      }
    }
  }

  getPlayerPlace(n){
    this.playerPlace = n;
  }

  resetPoint(){
    this.pointPlayer1.value = 0;
    this.pointPlayer2.value = 0;
  }

}
