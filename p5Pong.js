
let xBola = 300;
let yBola = 200;
let dBola = 15;

let velBolaX = 2;
let velBolaY = 2;

let raio = dBola/2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
  verificaColisaoBorda();
}
 
function mostraBola(){
 circle(xBola,yBola,dBola);
}

function movimentaBola(){
  xBola += velBolaX;
  yBola += velBolaY;
}

function verificaColisaoBorda(){
     if (xBola+ raio > width || xBola - raio < 0){
    velBolaX *= -1;
  }
  if(yBola + raio > height || yBola - raio < 0){
    velBolaY *= -1;
  }  
}






