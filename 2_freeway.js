//Para rodar o jogo: 
//Acesse https://editor.p5js.org/
//Crie uma pasta chamada 'Imagens'
//Faça upload das imagens em 'freeway_material.zip'
//Faça upload do arquivo p5.collide2D na opção sketch files > upload file
//Inclua a tag <script src="p5.collide2d.js"></script> no arquivo index.html dentro de <body><main>
//Execute o código
//

//variáveis das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let colisao = false;
let meusPontos = 0;
let somDaTrilha;
let somDaColisao;
let somDoPonto; 

//variáveis do carro
//let yCarro = 40;
//let xCarro = 600;

//variáveis do carro 2
//let yCarro2 = 95;
//let xCarro2 = 600;

//variáveis do carro 3
//let yCarro3 = 145;
//let xCarro3 = 600;

//Usando listas para resumir as variáveis de Carros:
//lista Carros com as variáveis para Carros:
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 145, 200, 255, 310];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

//variáveis do ator
let yAtor = 365;
let xAtor = 100;

function preload(){
  imagemDaEstrada = loadImage('Imagens/estrada.png');
  imagemDoAtor = loadImage('Imagens/ator-1.png');
  imagemCarro = loadImage('Imagens/carro-1.png');
  imagemCarro2 = loadImage('Imagens/carro-2.png');
  imagemCarro3 = loadImage('Imagens/carro-3.png');
  imagemCarro4 = loadImage('Imagens/carro-1.png');
  imagemCarro5 = loadImage('Imagens/carro-2.png');
  imagemCarro6 = loadImage('Imagens/carro-3.png');

  somDaTrilha = loadSound("Imagens/trilha.mp3");
  somDaColisao = loadSound("Imagens/colidiu.mp3");
  somDoPonto = loadSound("Imagens/pontos.wav");
}

function setup(){
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw(){
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

//Pode-se usar um laço de repetição para executar códigos com mesmo padrão (For):
//O mesmo FOR se aplicaria na função movimentaCarro(); e voltaPosicaoInicial();
let imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]; 
function mostraCarro(){
let imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5,imagemCarro6];
 for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  image(imagemCarro, xCarros[0], yCarros[0], comprimentoCarro, alturaCarro);
  image(imagemCarro2, xCarros[1], yCarros[1], comprimentoCarro, alturaCarro);
  image(imagemCarro3, xCarros[2], yCarros[2], comprimentoCarro, alturaCarro);
  image(imagemCarro4, xCarros[3], yCarros[3], comprimentoCarro, alturaCarro);
  image(imagemCarro5, xCarros[4], yCarros[4], comprimentoCarro, alturaCarro);
  image(imagemCarro6, xCarros[5], yCarros[5], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
  xCarros[3] -= velocidadeCarros[3];
  xCarros[4] -= velocidadeCarros[4];
  xCarros[5] -= velocidadeCarros[5];
}

function voltaPosicaoInicialCarro(){
  if(xCarros[0] < -50){
    xCarros[0] = 600;
  }
  if(xCarros[1] < -50){
    xCarros[1] = 600;
  }
  if(xCarros[2] < -50){
    xCarros[2] = 600;
  }
  if(xCarros[3] < -50){
    xCarros[3] = 600;
  }
  if(xCarros[4] < -50){
    xCarros[4] = 600;
  }
  if(xCarros[5] < -50){
    xCarros[5] = 600;
  }
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function verificaColisao(){
// Parametros  da função de colisão do arquivo: p5.collide2d.js; 
// disponível  em: https://p5js.org/libraries/ > p5.Collide2D > GitHub 
// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
for (let i=0; i < imagemCarros.length; i++){
  colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15 );
  if (colisao){
    voltaAtorPosicaoInicial();
    somDaColisao.play();
    if(meusPontos > 0){
      meusPontos -= 1;
    }
  } 
}
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){

  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width/5, 5, 25)
}

function marcaPonto(){
  if(yAtor < 20){
    meusPontos += 1;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
}













