class Rope {

    constructor(bodyA,pointB) {

        var con = {
     
        bodyA : bodyA , 
        pointB : pointB ,
        stifness : 0.001 ,
        length : 250

        }
        this.pointB = pointB ;
        this.sling = Constraint.create(con);
        World.add(myWorld,this.sling);

    }

    attach(body) {

        this.sling.bodyA = body;
    }

    fly(){

        this.sling.bodyA = null;
    }

    display() {

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    
    }
}