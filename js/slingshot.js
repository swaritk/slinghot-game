class SlingShot{
    constructor(bodyA, pointB){
        var Slingshot_options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.sling = Constraint.create(Slingshot_options);
        this.pointB = pointB
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA =null;
    }
    display() {
        if(this.sling.bodyA){
            var pointA= this.sling.bodyA.position;
            var pointB= this.pointB;

            strokeWeight(4);
            stroke("blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
        }
    }





/*
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}*/