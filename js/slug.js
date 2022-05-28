class Slug {
    constructor(x,y,r,c) {
       var ground_options = {
            isStatic: false,
            restitution:0.7,
            friction:0.1
        }
        this.r = r;
        this.c = c;
        this.body = Bodies.circle(x,y,this.r,ground_options);
        World.add(world,this.body);
        
    }
    display() {
      push()
      ellipseMode(RADIUS);
      fill("purple")
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
      pop()
    }
  }