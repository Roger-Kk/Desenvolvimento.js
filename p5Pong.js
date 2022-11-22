
let xBola = 300;
let yBola = 200;
let dBola = 15;

let velBolaX = 2;
let velBolaY = 2;

let xRaquete = 5;
let yRaquete = 150;
let raqueteCompr = 10;
let raqueteAlt = 90;

let raio = dBola/2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete()
}
 
function mostraBola(){
 circle(xBola,yBola,dBola);
}

function movimentaBola(){
  xBola += velBolaX;
  yBola += velBolaY;
}

function verificaColisaoBorda(){
     if (xBola + raio > width || xBola - raio < 0){
    velBolaX *= -1;
  }
  if(yBola + raio > height || yBola - raio < 0){
    velBolaY *= -1;
  }  
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteCompr, raqueteAlt)
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
   if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBola - raio < xRaquete + raqueteCompr && yBola - raio < yRaquete + raqueteAlt && yBola + raio > yRaquete){
    velBolaX *= -1;
  }
}






