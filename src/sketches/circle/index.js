// import p5js from 'p5/lib/p5.min.js';
import p5js from 'p5';

new p5js(initSketch);

function initSketch(sk) {
	const { CENTER, HSB, TWO_PI, PI } = sk;
	const radius = 7;

	sk.setup = () => {
		sk.createCanvas(500, 500);
		// sk.noCursor();
		sk.colorMode(HSB, 360, 100, 100);
		sk.rectMode(CENTER);
		// sk.noStroke();

		// sk.circle(sk.width / 2, sk.height / 2, 720);
		// sk.circle(sk.width / 2, 10, 20);
	};

	sk.draw = () => {
		sk.circle(sk.width / 2, sk.height / 2, 500);

		sk.translate(sk.width / 2, sk.height / 2);
		sk.circle(sk.width / 2, 10, 20);
		// sk.background(sk.mouseY / 2, 100, 100);
		// sk.fill(360 - sk.mouseY / 2, 100, 100);
		// sk.rect(360, 360, sk.mouseX + 1, sk.mouseX + 1);
	};

	sk.keyPressed = () => {
		if (sk.key === 's' || sk.key === 'S')
			sk.saveCanvas(sk.canvas, String(new Date().getTime()), 'png');
	};
}
