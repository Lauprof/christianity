console.log('Hello World!');
var c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
//drawing a line
//ctx.moveTo(0,0);
//ctx.lineTo(500,500);
//ctx.stroke


/*drawing texts*/

ctx.font='15px myFont';
ctx.fillStyle = "red";
ctx.fillText(" Designed by Lauprof",10,50);
ctx.strokeText();
