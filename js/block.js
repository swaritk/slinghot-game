class Block {
    constructor(x,y,width,height) {
       var ground_options = {
            isStatic: false,
           // density:10,
            //friction:2
        }
        this.visibility = 225;
        this.width =width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.image = loadImage("assets/blockcrate.jpg")
        World.add(world,this.body);
       
    }


    score(){
        if(this.visibility<0 && this.visibility >-105){
            score++;
        }
    }
    display(){
       if(this.body.speed<5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop()
  }else{
      World.remove(world, this.body);
      push();
      this.visibility = this. visibility - 5;
      pop();
    }
} 
}
