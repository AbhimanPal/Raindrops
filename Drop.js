class Drop{
    constructor(){
        this.x = floor(random(0,width));
        this.y = floor(random(0,height));
        this.ySpeed = 18;
    }
    fall(){
        this.y = this.y + this.ySpeed;
        if(this.y>height){
          this.y = floor(random(0,height));
        }
        //this.display();
    }
    display(){
        // textSize(20);
        // text("5",this.x,this.y);
        var rand = random(0,255);
        var rand2 = random(0,255);
        var rand3 = random(0,255)
        stroke(rand,rand2,rand3);
        strokeWeight(10);
        line(this.x,this.y,this.x,this.y+10);
    }
}