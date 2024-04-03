//Bruno Munari Face

//declaración de variables
let yMouth = 400; //Posición vertical de la boca
let sizeEyes = 30; //Tamaño de los ojos
let x1= 550;let x2= 650;x3= 750;let x4 = 650; 
let y1= 250;let y2= 150;y3= 250;let y4 = 350;
let yMouth2= 500;
let sizeFace1=20; 
let sizeFace2=40;

function setup() {
  createCanvas(2400,700);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  
  strokeWeight(7);
  
  for (let i =50; i<500; i+=100){
    //Vertical Lines
    line(i,50,i,450);
      for(let j=50; j<500; j+=100){
        //Horizontal Lines
        line(50,j,450,j);
      }
    }
  
  //eyebrow
  for (let i =50; i<450; i+=200){
    //Vertical Lines
    line(i,150,i+100,50);
      for(let j=150; j<450; j+=200){
        //Horizontal Lines
        line(j,50,j+100,150);
      }
    }
  
  //nose
  line(150,250,250,350);
  line(250,350,350,250);
  
  line(150,yMouth,350,yMouth);
  
  //Eyes
  for(let k=150; k<400;k+=200){
    fill(0);
    circle(k,150,sizeEyes);
  }
  
  for (let i =550; i<1100; i+=100){
    //Vertical Lines
    line(i,50,i,650);
      for(let j=50; j<700; j+=100){
        //Horizontal Lines
        line(550,j,1050,j);
      }
    }
  
  for(b=750; b < 855; b+=10){
    strokeWeight(4);
    line(b,50,b,150);
    line(b,550,b,650);
  }
  
  //nose
  strokeWeight(4);
  line(760,50,760,360);
  line(840,50,840,360);
  noFill(0);
  arc(750,400,90,100,90,270);
  arc(850,400,90,100,-90,-270);
  arc(760,400,85,80,90,270);
  arc(840,400,85,80,-90,-270);
  line(760,440,840,440);
  //52:49 min
  
  //eyes
  noFill(0);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  quad(x1+10, y1, x2, y2+10, x3-10, y3, x4, y4-10);
  quad(x1+70, y1, x2, y2+70, x3-70, y3, x4, y4-70);
  quad(x1+300, y1, x2+300, y2, x3+300, y3, x4+300, y4);
  quad(x1+310, y1, x2+300, y2+10, x3+300-10, y3, x4+300, y4-10);
  quad(x1+370, y1, x2+300, y2+70, x3+300-70, y3, x4+300, y4-70);
  
  //mouth
  line(650,yMouth2-5,950,yMouth2-5);
  line(650,yMouth2+5,950,yMouth2+5);
  
  line(650,500,750,450);
  line(650,500,750,550);
  line(650+10,500,750,450+10);
  line(650+10,500,750,550-10);
  
  line(750,450+10,850,450+10);
  line(750,550-10,850,550-10);
  
  line(950-10,500,850,450+10);
  line(950-10,500,850,550-10);
  line(950,500,850,450);
  line(950,500,850,550);
  
  //Third Face
  for (let i =1350; i<1460; i+=100){
    strokeWeight(6);
    line(i,50,i,550);
    }
  strokeWeight(6);
  circle(1400,300,520);
  
  //eyes
  strokeWeight(4);
  circle(1250,250,200);
  circle(1550,250,200);
  circle(1250,250,185);
  circle(1550,250,185);
  circle(1250,250,110);
  circle(1550,250,110);
  strokeWeight(10);
  circle(1250,250,30);
  circle(1550,250,30);
  strokeWeight(4);
  
  //nose
  for (let i =1360; i<1450; i+=80){
    fill(0);
    circle(i,350,10);
    }
  
  //mouth
  noFill();
  circle(1400,400,100);
  strokeWeight(10);
  circle(1400,400,50);
  
  
  //fifth face
  
  //1750
  strokeWeight(4);
  
  fill(0);
  beginShape();
  vertex(1750,250);
  vertex(1950,50);
  vertex(2150,50);
  vertex(2350,250);
  vertex(2350,450);
  vertex(2150,650);
  vertex(1950,650);
  vertex(1750,450);
  endShape(CLOSE);
  
  fill(255);
  beginShape();
  vertex(1750+sizeFace1,250);
  vertex(1950,50+sizeFace1);
  vertex(2150,50+sizeFace1);
  vertex(2350-sizeFace1,250);
  vertex(2350-sizeFace1,450);
  vertex(2150,650-sizeFace1);
  vertex(1950,650-sizeFace1);
  vertex(1750+sizeFace1,450);
  endShape(CLOSE);
  
  beginShape();
  vertex(1750+sizeFace2,250);
  vertex(1950,50+sizeFace2);
  //left eye
  vertex(1950,250);
  vertex(1950-25,250);
  vertex(1950-25,250+50);
  vertex(1950+25,250+50);
  vertex(1950+25,250);
  vertex(1950+10,250);
  vertex(1950+10,50+sizeFace2);
  //nose
  vertex(2050-10,50+sizeFace2);
  vertex(2050-10,350);
  vertex(1950+10,350);
  vertex(1950+10,350+20);
  vertex(2050+90,350+20);
  vertex(2050+90,350);
  vertex(2050+10,350);
  vertex(2050+10,50+sizeFace2);
  
  //right eye
  vertex(2150-10,50+sizeFace2);
  vertex(2150-10,250);
  vertex(2150-25,250);
  vertex(2150-25,250+50);
  vertex(2150+25,250+50);
  vertex(2150+25,250);
  vertex(2150,250);
  
  vertex(2150,50+sizeFace2);
  vertex(2350-sizeFace2,250);
  vertex(2350-sizeFace2,450-10);
  
  //superior lip
  
  vertex(2050+90,450-10);
  vertex(2050+90,450-50);
  vertex(2050+85,450-50);
  vertex(2050+5,450-50);
  vertex(2050+5,450-30);
  vertex(2050-5,450-30);
  vertex(2050-5,450-50);
  vertex(2050-85,450-50);
  vertex(2050-90,450-50);
  vertex(2050-90,450-10);
  
  vertex(1750+sizeFace2,450-10);
  endShape(CLOSE);
  
  beginShape();
  //lower lip
  vertex(2050+90,450);
  vertex(2050+90,450+40);
  vertex(2050-90,450+40);
  vertex(2050-90,450);
  vertex(1750+sizeFace2,450);
  vertex(1950,650-sizeFace2);
  
  //chin
  vertex(2050-7,650-sizeFace2);
  vertex(2050-7,650-sizeFace2-20);
  vertex(2050+7,650-sizeFace2-20);
  vertex(2050+7,650-sizeFace2);
  vertex(2150,650-sizeFace2);
  vertex(2350-sizeFace2,450);
  endShape(CLOSE);
  
  
  fill(0);
  rectMode(CENTER);
  rect(1950,250+25,20,20,3);
  rect(2150,250+25,20,20,3);
  rect(2050,450,140,20,4);
  
  
}

function keyPressed() {
  //controlador de evento, sucede cuando se presiona la barra espaciadora del tecla
  console.log("key pressed");
  save("face_bruno_munari.png")//toma un parameto una cadena de caracteres que sera el nombre del archivo
}
