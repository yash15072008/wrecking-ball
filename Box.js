class Box{

    constructor(x,y) {
        var box = {
            restitution : 0.5,
            friction : 2,
            density : 2

        }

        this.body = Bodies.rectangle(x,y,70,70,box);
        this.width = 70;
        this.height = 70;

        World.add(myWorld,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}