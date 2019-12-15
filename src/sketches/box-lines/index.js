// P5.js version of https://twitter.com/ky0ju_art/status/1188400508341383168
let x = 0;
let y = 0;
let X = 0;
let Y = 0;
let a = 0;

function setup() {
	createCanvas(800, 800);
	frameRate(60);
	clear();
	background(51);
}

function draw() {
	translate(400, 400);

	a++;
	x += X;
	y += Y;

	if (a % 40 == 0) {
		X = int(random(-2, 2));
		Y = int(random(-2, 2));

		fill(255);
		circle(x, y, 5);
	}

	stroke(255, 20);
	noFill();
	rect(0, 0, x, y);

	if (a > 1600) {
		x = 0;
		y = 0;
		a = 0;
	}
}
