class box{

    constructor(x,y,width,height,angle) {
        var box = {
            restitution : 0.5,
            friction : 2,
            density : 2

        }

        this.width = width;
        this.height = height;

        World.add(myWorld,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        
    }
}