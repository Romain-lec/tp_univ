export default class Mobile{

	constructor(x,y,deltaX,deltaY){
		this.x=x;
		this.y=y;
		this.deltaX=deltaX;
		this.deltaY=deltaY;
		this.image=null;
		this.width=0;
		this.heigth=0;
	}
	
	draw(context) {
		context.drawImage(this.image,this.x,this.y)
	}

	
    	move(canvas){
		if(this.x+this.deltaX+this.width > canvas.width || this.x+this.deltaX < 0){
		    this.deltaX = -this.deltaX;
        }
		if(this.y+this.deltaY+this.heigth > canvas.height || this.y+this.deltaY < 0){
		    this.deltaY = -this.deltaY;
        }
		this.x = this.x + this.deltaX;
		this.y = this.y + this.deltaY;
    }
}
