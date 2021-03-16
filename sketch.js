const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5;
var box6, box7, box8, box9, box10;
var boll, string;

function setup () {

    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.World;

    box1 = new box();
    box2 = new box();
    box3 = new box();
    box4 = new box();
    box5 = new box();
    box6 = new box();
    box7 = new box();
    box8 = new box();
    box9 = new box();
    box10 = new box();

}

function draw() {

    background("light blue");

}