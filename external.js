var cnv = document.getElementById('mycanvas');
var ctx = cnv.getContext('2d');

var pict = new Image();
pict.src = " images/bg1.png";
pict.onload = function() {         
  ctx.drawImage(pict, 10, 10);      
}     

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#E4E2EF';
ctx.shadowBlur = 5;
ctx.fillStyle = '#E4E2EF';
ctx.fillRect(34, 331, 228, 65);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#E4E2EF';
ctx.shadowBlur = 5;
ctx.fillStyle = '#E4E2EF';
ctx.fillRect(156, 323, 57, 155);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.rotate(20 * Math.PI / 180);
ctx.shadowColor = '#E4E2EF';
ctx.shadowBlur = 5;
ctx.fillStyle = '#E4E2EF';
ctx.fillRect(148, 108, 65, 203);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#08808E';
ctx.shadowBlur = 10;
ctx.beginPath();
ctx.moveTo(35, 330);
ctx.lineTo(90, 180);
ctx.lineTo(150, 330);
ctx.closePath();
ctx.fillStyle = "#08808E";
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.strokeStyle = '#FFBFB3';
ctx.lineWidth = '3';
ctx.moveTo(60, 396);
ctx.lineTo(250, 396);
ctx.stroke();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#E3E567';
ctx.shadowBlur = 5;
ctx.fillStyle = '#E3E567';
ctx.fillRect(186, 353, 25, 125);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#E4E2EF';
ctx.shadowBlur = 5;
ctx.ellipse(440, 335, 160, 122, Math.PI / 2, 0, 2 * Math.PI);
ctx.fillStyle = '#E4E2EF';
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#E4E2EF';
ctx.shadowBlur = 5;
ctx.ellipse(440, 335, 80, 61, Math.PI / 2, 0, 2 * Math.PI);
ctx.fillStyle = '#fff';
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#E4E2EF';
ctx.shadowBlur = 5;
ctx.fillStyle = '#E4E2EF';
ctx.fillRect(616, 331, 218, 73);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#E4E2EF';
ctx.shadowBlur = 5;
ctx.fillStyle = '#E4E2EF';
ctx.fillRect(707, 331, 93, 147);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.rotate(20 * Math.PI / 360);
ctx.shadowColor = '#E4E2EF';
ctx.shadowBlur = 5;
ctx.fillStyle = '#E4E2EF';
ctx.fillRect(668, 18, 65, 200);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#7AC9D0';
ctx.shadowBlur = 5;
ctx.fillStyle = '#7AC9D0';
ctx.arc(690, 320, 80, 0, Math.PI * 2, false);
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#A5CF61';
ctx.shadowBlur = 5;
ctx.fillStyle = '#A5CF61';
ctx.fillRect(705, 405, 95, 27);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.strokeStyle = '#FFF376';
ctx.lineWidth = '3';
ctx.moveTo(800, 478);
ctx.lineTo(800, 396);
ctx.stroke();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.shadowColor = '#8F87D2';
ctx.shadowBlur = 5;
ctx.fillStyle = '#8F87D2';
ctx.arc(325, 273, 80, 0.92 * Math.PI, 1.92 * Math.PI);
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.strokeStyle = '#2C4975';
ctx.lineWidth = '3';
ctx.moveTo(620, 198);
ctx.lineTo(250, 294);
ctx.stroke();
ctx.restore();


var cnv2 = document.getElementById('newcanvas');
var ctx2 = cnv2.getContext('2d');



// x and y variables determine the position of the ball:

x = 100;
y = 50;

// change variable determines how far the ball moves during a redraw and which direction
change = 4;
otherchange = 3;


// width and height determine the dimensions of the box.
w = 1000;
h = 150;

function animate() {
  ctx2.clearRect(0, 0, innerWidth, innerHeight);

  ctx2.fillStyle = '#FED880 ';
  ctx2.beginPath();
  ctx2.arc(x, y, 20, 0, Math.PI * 2, true);
  ctx2.fill();

  ctx2.beginPath();
  ctx2.strokeStyle = '#000';
  ctx2.lineWidth = '1';
  ctx2.font = '70px "Georgia"';
  ctx2.strokeText('Destination does not exist.', 40, 110);
  ctx2.closePath();

  if (x >= (w-20) || x <= 20) { // checks ball position from left/right edges
    change = -change
    // executed if condition is true, change switched to reverse direction of ball.           
  }

  x = x + change; // updates horizontal position of ball

  if (y >= (h-20) || y <= 20) {
    otherchange = -otherchange;
  }

  y = y + otherchange;

}


setInterval(animate, 30);
// causes function to repeat with time in milliseconds; adjusting this number changes the speed of the animation. Increasing the number to 50 will make it go very slow…!

animate();