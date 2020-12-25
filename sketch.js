const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var poligon1, slingShot;
var score=0;
var backgroundColour={a:80, b:145, c:238};

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(600,300,250,20);
    ground3 = new Ground(900,200,250,20);
    ground4 = new Ground(900,200+200,250,20);

    box1 = new Box(600,260,30,40);
    box2 = new Box(630,260,30,40);
    box3 = new Box(660,260,30,40);
    box4 = new Box(690,260,30,40);
    box5 = new Box(570,260,30,40);
    box6 = new Box(540,260,30,40);
    box7 = new Box(510,260,30,40);

    box8 = new Box(600,220,30,40);
    box9 = new Box(630,220,30,40);
    box10 = new Box(660,220,30,40);
    box11= new Box(570,220,30,40);
    box12= new Box(540,220,30,40);

    box13 = new Box(600,180,30,40);
    box14 = new Box(630,180,30,40);
    box15 = new Box(570,180,30,40);

    box16 = new Box(600,140,30,40);



    box17 = new Box(900,160,30,40);
    box18 = new Box(930,160,30,40);
    box19 = new Box(960,160,30,40);
    box20 = new Box(870,160,30,40);
    box21 = new Box(840,160,30,40);

    box22 = new Box(900,120,30,40);
    box23 = new Box(930,120,30,40);
    box24 = new Box(870,120,30,40);

    box25 = new Box(900,90,30,40);



    box26 = new Box(900,160+200,30,40);
    box27 = new Box(930,160+200,30,40);
    box28 = new Box(960,160+200,30,40);
    box29 = new Box(870,160+200,30,40);
    box30 = new Box(840,160+200,30,40);

    box31 = new Box(900,120+200,30,40);
    box32 = new Box(930,120+200,30,40);
    box33 = new Box(870,120+200,30,40);

    box34 = new Box(900,90+200,30,40);

    


    poligon1 = new poligon(190,300);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(poligon1.body,{x:190,y:300});
}

function draw(){
    background(backgroundColour.a,backgroundColour.b,backgroundColour.c);
    setBackground();
    Engine.update(engine);

    noStroke();
    fill("yellow");
    textSize(30);
    text("Score: "+score,1000,100);

    strokeWeight(4);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();



    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();

    box25.display();



    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();

    box31.display();
    box32.display();
    box33.display();

    box34.display();

    ground.display();
    ground2.display();
    ground3.display();
    



    poligon1.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(poligon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode==32){
        slingshot.attach(poligon1.body);
    }
}

async function setBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/muscat"); 
    var responseJSON = await response.json();

    var dateTime =responseJSON.datetime;
    var hour=dateTime.slice(11,13);
    // return hour;
    if(hour=>6 &&hour<=19){
        backgroundColour= {a:80, b:145, c:238};
    }else{
        backgroundColour={a:41, b:41, c:41};
    }
}