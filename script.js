<<<<<<< HEAD
const canva = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); 
ctx.strokeStyle = "aquamarine";
ctx.fillStyle = "white";
ctx.lineWidth = 2;
ctx.fillRect (50,50,150,50); 
ctx.strokeRect (50,50,150,50);


const canva2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = "teal";
ctx2.beginPath();
ctx2.moveTo(120,15);
ctx2.lineTo(65,150);
ctx2.lineTo(175,150);
ctx2.fill();

const canva3 = document.getElementById('canvas3');
const ctx3 = canva3.getContext('2d');
ctx3.strokeStyle = "plum";
ctx3.lineWidth = 4;
ctx3.beginPath();
ctx3.arc(75, 75, 65, 0, Math.PI*2, false);
ctx3.moveTo(110,85);
ctx3.stroke();

const canva4 = document.getElementById('canvas4');
const ctx4 = canva4.getContext('2d');
ctx4.strokeStyle = "purple";
ctx4.lineWidth = 2;
ctx4.moveTo(50,50);
ctx4.lineTo(265,150);
ctx4.stroke();

const canva5 = document.getElementById('canvas5');
const ctx5 = canva5.getContext('2d');
ctx5.strokeStyle = "gold";
ctx5.lineWidth = 2;
ctx5.moveTo(50, 50);
ctx5.bezierCurveTo(100, 0, 200, 200, 250, 50);
ctx5.stroke();

const canva6img = document.getElementById('canvas6img');
const ctx6 = canva6img.getContext("2d");
const img = new Image();
img.src = "img/punk.png";
img.onload = function () {
  ctx6.drawImage(img, 0, 0);
};

=======
const canva = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); 
ctx.fillStyle = 'purple'; 
ctx.fillRect (20,20,150,200); 
ctx.strokeRect (20,20,150,200);


const canva2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = "red";
ctx2.beginPath();
ctx2.moveTo(120,15);
ctx2.lineTo(65,150);
ctx2.lineTo(175,150);
ctx2.fill();

const canva3 = document.getElementById('canvas3');
const ctx3 = canva3.getContext('2d');
ctx3.beginPath();
ctx3.arc(75, 75, 75, 0, Math.PI*2, false);
ctx3.moveTo(110,75);
ctx3.stroke();
>>>>>>> 34d6003d55a0e164bd0e9e2fad11576f0f8dc051
