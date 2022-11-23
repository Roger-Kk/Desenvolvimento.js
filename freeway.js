//Para rodar o jogo: 
//Acesse https://editor.p5js.org/
//Crie uma pasta chamada 'Imagens'
//Faça upload das imagens em 'material_freeway.zip'
//Execute o código

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload(){
  imagemDaEstrada = loadImage('Imagens/estrada.png');
  imagemDoAtor = loadImage('Imagens/ator-1.png')

  imagemCarro = loadImage('Imagens/carro-1.png')
}

function setup(){
  createCanvas(500, 400);
}

function draw(){
  background(imagemDaEstrada);
  image(imagemDoAtor, 100, 366, 30, 30);
  image(imagemCarro, 400, 40, 50, 40);
}









