import p5js from 'p5/lib/p5.min.js';

new p5js(initSketch);

const config = {
	height: 500,
	width: 500,
};

function initSketch(sk) {
	const { HSB } = sk;
	let stepX;
	let stepY;

	sk.setup = () => {
		sk.createCanvas(config.height, config.width);
		sk.colorMode(HSB, config.width, config.height, 100);
		sk.noStroke();
	};

	sk.draw = () => {
		stepX = sk.mouseX > 0 ? sk.mouseX + 10 : 10;
		stepY = sk.mouseY > 0 ? sk.mouseY + 10 : 10;

		console.log(stepY, stepX);

		for (let gridY = 0; gridY < sk.height; gridY += stepY) {
			for (let gridX = 0; gridX < sk.width; gridX += stepX) {
				sk.fill(gridX, sk.height - gridY, 100);
				sk.rect(gridX, gridY, stepX, stepY);
			}
		}
	};
}
