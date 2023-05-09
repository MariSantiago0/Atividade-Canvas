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
