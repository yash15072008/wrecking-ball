class Ball{

    constructor(x,y) {
        var box = {
            restitution : 0.5,
            friction : 2,
            density : 2

        }

        this.body = Bodies.rectangle(x,y,50,50,box);
        this.width = 50;
        this.height = 50;

        World.add(myWorld,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        strokeWeight(4);
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();

    }
}