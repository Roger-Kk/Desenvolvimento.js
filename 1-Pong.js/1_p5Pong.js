
//Execute o código em https://editor.p5js.org/

let xBola = 300;
let yBola = 200;
let dBola = 15;

let velBolaX = 6;
let velBolaY = 4;

let xRaquete = 5;
let yRaquete = 150;

let xRaqueteOponente =  585;
let yRaqueteOponente = 150;
let velRaqueteOponente;

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
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
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

function mostraRaquete(x, y){
  rect(x, y, raqueteCompr, raqueteAlt)
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
   if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  velRaqueteOponente = yBola - yRaqueteOponente - raqueteCompr/2 -30;
  yRaqueteOponente += velRaqueteOponente;
}

function verificaColisaoRaquete(){
  if(xBola - raio < xRaquete + raqueteCompr && yBola - raio < yRaquete + raqueteAlt && yBola + raio > yRaquete){
    velBolaX *= -1;
  }
}

function verificaColisaoRaqueteOponente(){
  if(xBola + raio > xRaqueteOponente && yBola - raio < yRaqueteOponente + raqueteAlt && yBola + raio > yRaqueteOponente){
    velBolaX *= -1;
  }
}






