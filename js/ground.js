class Ground {
  constructor(x,y,width,height) {
     var ground_options = {
          isStatic: true 
      }
      this.width =width
      this.height = height
      this.body = Bodies.rectangle(x,y,width,height,ground_options);
      World.add(world,this.body);
     
  }
  display() {
    push()
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop()
    
}
}
