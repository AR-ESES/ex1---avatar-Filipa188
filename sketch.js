let X_meio;
let Y_meio;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {

	background(105);
	X_meio = width/2;
	Y_meio = height/2;
	noFill();
	stroke(55);
	strokeWeight(4);
	circle(X_meio, Y_meio, height/2);
	circle(X_meio - height/3/4, Y_meio - height/18, height/12);
	circle(X_meio + height/3/4, Y_meio - height/18, height/12);
    line  (X_meio, 520, X_meio, 800)
	line  (570, 400, 670, 400)
}