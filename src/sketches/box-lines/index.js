// P5.js version of https://twitter.com/ky0ju_art/status/1188400508341383168
import p5 from 'p5/lib/p5.min.js';

const config = {
	height: 500,
	width: 500,
};

let x = 0;
let y = 0;
let X = 0;
let Y = 0;
let a = 0;

new p5(sk => initSketch(sk, config));

function initSketch(sk, { width, height }) {
	sk.setup = () => {
		sk.createCanvas(height, width);
		sk.frameRate(60);
		sk.clear();
		sk.background(51);
	};

	sk.draw = () => {
		sk.translate(width / 2, height / 2);
		a++;
		x += X;
		y += Y;

		if (a % 20 == 0) {
			X = sk.int(sk.random(-2, 2));
			Y = sk.int(sk.random(-2, 2));

			sk.fill(255);
			sk.circle(x, y, 5);
		}

		sk.stroke(255, 20);
		sk.noFill();
		sk.rect(0, 0, x, y);

		if (a > 1600) {
			x = 0;
			y = 0;
			a = 0;
		}
	};
}
