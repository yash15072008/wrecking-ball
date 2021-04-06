const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld, ground;

function setup () {

    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1 = new Box(600,555);
    box2 = new Box(600,485);
    box3 = new Box(600,415);
    box4 = new Box(600,345);
    box5 = new Box(600,275);
    box6 = new Box(600,205);
    box7 = new Box(600,135);

    box11 = new Box(700,555);
    box21 = new Box(700,485);
    box31 = new Box(700,415);
    box41 = new Box(700,345);
    box51 = new Box(700,275);
    box61 = new Box(700,205);
    box71 = new Box(700,135);
    
    box12 = new Box(800,555);
    box22 = new Box(800,485);
    box32 = new Box(800,415);
    box42 = new Box(800,345);
    box52 = new Box(800,275);
    box62 = new Box(800,205);
    box72 = new Box(800,135);

    ground = new Ground(600,590,1200,20);
    ball = new Ball(500,300);
    rope = new Rope(ball.body,{x:500,y:50});
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

    box11.display();
    box21.display();
    box31.display();
    box41.display();
    box51.display();
    box61.display();
    box71.display();

    box12.display();
    box22.display();
    box32.display();
    box42.display();
    box52.display();
    box62.display();
    box72.display();

    ground.display();
    ball.display();
    rope.display();

}

function mouseDragged() {

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}