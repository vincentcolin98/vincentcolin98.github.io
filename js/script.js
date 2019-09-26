var stars = 500;
var speed = 0;

var x = new Array(stars);
var y = new Array(stars);
var z = new Array(stars);
var pz = new Array(stars);

for(var i = 0; i < stars; i++){
	x[i] = Math.random() * (screen.width+screen.width) - screen.width;
	y[i] = Math.random() * (screen.height+screen.height) - screen.height;
	z[i] = Math.random() * screen.width;
	pz[i] = z[i];
}

function setup(){
	createCanvas(screen.width, screen.height);
}

var textX = 0;
var textY = 0;
var speedY = 0.3;
var textSizeMain = 5;
var textSizeSub = 5;
var zoomText = 1;
var isZoomed = false;

function draw(){
	speed = map(mouseX, 0, screen.width, 5, 50);
	background(0);
	translate(screen.width/2,screen.height/2);
	fill(255);
	noStroke();
	for(var i = 0; i < stars; i++){
		var sx = map(x[i]/z[i],0,1,0,screen.width);
		var sy = map(y[i]/z[i],0,1,0,screen.height);
		var r = map(z[i],0,screen.width,10,0);
		var px = map(x[i]/pz[i],0,1,0,screen.width);
		var py = map(y[i]/pz[i],0,1,0,screen.height);
		pz[i] = z[i];
		stroke(255);
		line(px,py,sx,sy);
	}
	for(var i = 0; i < stars; i++){
		z[i] -= speed;
		if(z[i] < 1){
			z[i] = screen.width;
			x[i] = Math.random() * (screen.width+screen.width) - screen.width;
			y[i] = Math.random() * (screen.height+screen.height) - screen.height;
			pz[i] = z[i];
		}
	}
	fill(255);
  	textAlign(CENTER);
  	textSize(textSizeMain);
  	textStyle(BOLD);
  	textFont('Lucida Console');
  	text('Vincent Colin', textX, textY-100);
  	textStyle(NORMAL);
  	textSize(textSizeSub);
  	if(textSizeMain < 60){
  		textSizeMain+=zoomText;
  	}
  	if(textSizeSub < 35){
  		textSizeSub+=zoomText;
  	}
  	if(textSizeSub >= 35 && textSizeMain >= 60){
  		isZoomed = true;
  	}
  	text('Software Development Engineer', textX, textY);
  	if(textY > 20 || textY < 0){
  		speedY *= -1;
  	}
  	if(isZoomed){
  		textY += speedY;
  		$('.visit').fadeIn();
  	}
}