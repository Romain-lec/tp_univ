import Mobile from './Mobile.js';



// default values for a Ball : image and shifts
const PADDLE_IMAGE_SRC = './images/paddle.png';
const SHIFT_X = 0;
const SHIFT_Y = 15;


/**
 * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game's canvas)
 */
export default class Paddle extends Mobile {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   */
  constructor(x, y, theGame) {
    super(x, y, PADDLE_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
  }


    moveUp(){
        if (this.y <= 0) {
            this.shiftY = 0;
        }else{
            this.shiftY = -SHIFT_Y;
        }
    }

    moveDown(){
        if (this.y+this.height >= this.theGame.canvas.height) {
            this.shiftY = 0;
        }else{
            this.shiftY = SHIFT_Y;
        }
    }

}
