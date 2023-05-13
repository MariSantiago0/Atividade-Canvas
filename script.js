const canva = document.getElementById('canvas'); //buscando o elemento do documento HTML com o id "canvas"
const ctx = canvas.getContext('2d'); // obtendo o contexto 2d para desenhar na tela em 2d 
ctx.strokeStyle = "aquamarine"; // definindo a cor do contorno do desenho que é aquamarine
ctx.fillStyle = "white"; // preenchendo a cor branca dentro no desenho
ctx.lineWidth = 2; // tamanho da linha do contorno do desenho
ctx.fillRect (65,55,95,65); //  estamos usando o contexto 2D para desenhar um retângulo preenchido. Os quatro parâmetros representam a posição e as dimensões do retângulo. No caso, estamos desenhando um retângulo preenchido nas coordenadas (50, 50) -> (x,y) com largura 150 e altura 50.
ctx.strokeRect (65,55,95,65); // para desenhar o contorno do desenho usando as mesmas coordenadas do preenchimento


const canva2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = "teal";
ctx2.beginPath(); // iniciando o caminho do desenho que será traçado 
ctx2.moveTo(120,15); // movendo o ponto de início do caminho de desenho para as coordenadas (120, 15). Isso define a posição inicial a partir da qual o desenho será feito.
ctx2.lineTo(65,150); // traçando uma linha reta do ponto atual do caminho de desenho (120, 15) até as coordenadas (65, 150). Isso cria uma linha que conecta esses dois pontos.
ctx2.lineTo(175,150); // traçando outra linha reta do ponto atual do caminho de desenho (65, 150) até as coordenadas (175, 150). Isso cria uma segunda linha que conecta o ponto anterior a esse novo ponto.
ctx2.fill(); // vai preencher com cor esse contorno, para que fique visivel

const canva3 = document.getElementById('canvas3');
const ctx3 = canva3.getContext('2d');
ctx3.strokeStyle = "royalblue";
ctx3.lineWidth = 4;
ctx3.beginPath(); // marcando o caminho do desenho. O caminho é uma sequencia de comandos especificando como o desenho será desenhado conforme as coordenadas
ctx3.arc(75, 75, 65, 0, Math.PI*2, false); // desenhar um arco em um elemento canvas. 
ctx3.moveTo(110,85);// movendo o ponto de início do caminho de desenho para as coordenadas (120, 15). Isso define a posição inicial a partir da qual o desenho será feito.
ctx3.stroke(); // vai preencher com cor esse contorno, para que fique visivel

const canva4 = document.getElementById('canvas4');
const ctx4 = canva4.getContext('2d');
ctx4.strokeStyle = "purple";
ctx4.lineWidth = 2;
ctx4.moveTo(50,50);
ctx4.lineTo(265,150);
ctx4.stroke();

const canva5 = document.getElementById('canvas5');
const ctx5 = canva5.getContext('2d');
ctx5.strokeStyle = "steelblue";
ctx5.lineWidth = 2;
ctx5.moveTo(50, 50);
ctx5.bezierCurveTo(100, 0, 200, 200, 250, 50); //  desenha uma curva de Bezier cúbica em um elemento canvas. 
ctx5.stroke();

const canva6img = document.getElementById('canvas6img');
const ctx6 = canva6img.getContext('2d');
const img = new Image(); //  criando um novo objeto de imagem usando o construtor Image(). Esse objeto de imagem será usado para carregar e exibir a imagem no canvas.
img.src = "img/punk.png"; // chamando a imagem na pasta
img.onload = function () { // função criada para desenhar a imagem na tela
  ctx6.drawImage(img, 0, 0); // desenhando a imagem conforme as coordenadas
};


