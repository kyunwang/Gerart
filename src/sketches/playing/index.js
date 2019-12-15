import p5js from 'p5/lib/p5.min.js';

new p5js(initSketch);

function initSketch(sk) {
	const { HSB, TRIANGLE_FAN } = sk;
	let segmentCount = 360;

	sk.setup = () => {
		sk.createCanvas(500, 500);
		// sk.colorMode(HSB, 360, sk.width, sk.height);
		// sk.background(360, 0, sk.height);
		sk.noStroke();
	};

	sk.draw = () => {
		sk.colorMode(HSB, 360, sk.width, sk.height);
		sk.background(360, 0, sk.height);
		let angleStep = 360 / segmentCount;

		sk.beginShape(TRIANGLE_FAN);
		sk.vertex(sk.width / 2, sk.height / 2);

		for (let angle = 0; angle <= 360; angle += angleStep) {
			let vx = sk.width / 2 + sk.cos(sk.radians(angle)) * (sk.width / 2);
			let vy = sk.height / 2 + sk.sin(sk.radians(angle)) * (sk.height / 2);
			sk.vertex(vx, vy);
			sk.fill(angle, sk.mouseX, sk.mouseY);
		}

		sk.endShape();
	};

	sk.keyPressed = () => {
		switch (sk.key) {
			case '1':
				segmentCount = 360;
				break;
			case '2':
				segmentCount = 45;
				break;
			case '3':
				segmentCount = 24;
				break;
			case '4':
				segmentCount = 12;
				break;
			case '5':
				segmentCount = 6;
				break;
		}
	};
}
