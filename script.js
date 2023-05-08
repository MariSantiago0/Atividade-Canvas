const canva = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); 
ctx.fillStyle = 'purple'; 
ctx.fillRect (10,10,150,100); 
ctx.strokeRect (10,10,150,100);


const canva2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = "red";
ctx2.beginPath();
ctx2.moveTo(75,50);
ctx2.lineTo(100,75);
ctx2.lineTo(100,25);
ctx2.fillStyle();
