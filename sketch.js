const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld, ground;

function setup () {

    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.World;

    box1 = new Box(600,555);
    box2 = new Box(600,485);
    box3 = new Box(600,415);
    box4 = new Box(600,345);
    box5 = new Box(600,275);
    box6 = new Box(600,205);
    box7 = new Box(600,135);
    
    ground = new Ground(600,590,1200,20);
}

function draw() {

    background("lightblue");
    Engine.update(myEngine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    ground.display();

}