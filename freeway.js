//Para rodar o jogo: 
//Acesse https://editor.p5js.org/
//Crie uma pasta chamada 'Imagens'
//Faça upload das imagens em 'freeway_material.zip'
//Execute o código

//variáveis das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//variáveis do carro
let yCarro = 40;
let xCarro = 600;

//variáveis do carro 2
let yCarro2 = 95;
let xCarro2 = 600;

//variáveis do carro 3
let yCarro3 = 145;
let xCarro3 = 600;

//variáveis do ator
let yAtor = 365;
let xAtor = 100;

function preload(){
  imagemDaEstrada = loadImage('Imagens/estrada.png');
  imagemDoAtor = loadImage('Imagens/ator-1.png');
  imagemCarro = loadImage('Imagens/carro-1.png');
  imagemCarro2 = loadImage('Imagens/carro-2.png');
   imagemCarro3 = loadImage('Imagens/carro-3.png');
}

function setup(){
  createCanvas(500, 400);
}

function draw(){
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
}

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, 50, 40);
  image(imagemCarro2, xCarro2, yCarro2, 50, 40);
  image(imagemCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro(){
  xCarro -= 2;
  xCarro2 -= 3;
  xCarro3 -= 1.7;
  print(xCarro);
}

function voltaPosicaoInicialCarro(){
  if(xCarro < -50){
    xCarro = 600;
  }
  if(xCarro2 < -50){
    xCarro2 = 600;
  }
  if(xCarro3 < -50){
    xCarro3 = 600;
  }
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}







