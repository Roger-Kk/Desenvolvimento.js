//Para rodar o jogo: 
//Acesse https://editor.p5js.org/
//Crie uma pasta chamada 'Imagens'
//Faça upload das imagens em 'freeway_material.zip'
//Execute o código
//

//variáveis das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let colisao = false;

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
let xCarros = [600, 600, 600];
let yCarros = [40, 95, 145];
let velocidadeCarros = [2, 2.5, 3.2];

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

//Pode-se usar um laço de repetição para executar códigos com mesmo padrão (For):
//Nesse caso não vamos usar pois todo código está num bloco, e esse FOR só funcionaria, se o 
//código estivesse separado em mais arquivos. EX: um arquivo que carrega imagens, outro que roda o js.
//O mesmo FOR se aplicaria na função movimentaCarro(); e voltaPosicaoInicial();

// let imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3]; 
function mostraCarro(){
//  for (let i = 0; i < imagemCarros.length; i = i + 1){
//    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  image(imagemCarro, xCarros[0], yCarros[0], 50, 40);
  image(imagemCarro2, xCarros[1], yCarros[1], 50, 40);
  image(imagemCarro3, xCarros[2], yCarros[2], 50, 40);
 // }
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
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
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function verificaColisao(){
// Parametros  da função de colisão do arquivo: p5.collide2d.js; 
// disponível  em: https://p5js.org/libraries/ > p5.Collide2D > GitHub 
// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
colisao = collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

}

//continua...















