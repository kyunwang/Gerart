// P5.js version of https://twitter.com/ky0ju_art/status/1188400508341383168
import initP5 from '../../helpers/initP5';

const config = {
	height: 800,
	width: 800,
	events: {
		keyPressed(sk) {
			// console.log(sk.key, sk.keyCode);

			if (sk.keyIsDown(67)) {
				// Key: c
				sk.rectMode(sk.CENTER);
			} else {
				sk.rectMode(sk.CORNER);
			}
		},
	},
};

initP5(initSketch, config);

let x = 0;
let y = 0;
let X = 0;
let Y = 0;
let a = 0;

function initSketch(sk, { width, height }) {
	const { CENTER, HSB } = sk;

	sk.setup = () => {
		sk.createCanvas(height, width);
		sk.frameRate(60);
		sk.clear();
		sk.background(51);

		sk.smooth(); // anti-aliasing
		sk.colorMode(HSB, 360, 100, 100, 100);
		sk.noLoop();

		sk.rectMode(CENTER);
	};

	sk.draw = () => {
		// Center on defaulr
		sk.translate(sk.width / 2, sk.height / 2);

		// loopOne(sk); // ky0ju_art
		loopTwo(sk); // deconbatch
	};
}

let frameMax = 3; // Draw 3 frames
let rotateMax = 2; // Draw 2 times with 180 rotations
let imageMax = 2; // 2 Patterns per frame

function loopTwo(sk) {
	const { PI, TWO_PI } = sk;
	let initHue = sk.random(360.0);

	for (let frameCount = 0; frameCount < frameMax; frameCount++) {
		sk.noiseSeed(frameCount * 10);

		sk.blendMode(sk.BLEND);
		drawCanvas(sk, initHue + 240.0);

		sk.blendMode(sk.DIFFERENCE);
		sk.noStroke();
		sk.noFill();

		sk.push();
		sk.rotate(sk.random(PI));

		for (let imageCount = 0; imageCount <= imageMax; imageCount++) {
			const imageRatio = sk.map(imageCount, 1, imageMax, 0, 1);
			const plotMax = sk.floor(sk.map(imageRatio, 0, 1, 600, 900));

			const plotDiv = sk.map(imageRatio, 0, 1, 0.001, 0.002);
			const plotMult = sk.map(imageRatio, 0, 1, 5, 15);
			const initDiv = sk.map(imageRatio, 0, 1, 0.005, 0.015);
			const baseHue = initHue + sk.map(imageRatio, 0, 1, 0, 30);

			const baseBri = 1;
			const baseSize = sk.map(imageRatio, 0, 1, 0.7, 0.4);

			drawVector(
				sk,
				plotMax,
				plotDiv,
				plotMult,
				initDiv,
				baseHue,
				baseBri,
				baseSize
			);
		}

		sk.pop();
	}
}

// The sand-like background
function drawCanvas(sk, baseHue) {
	sk.background(0.0, 0.0, 90.0, 100.0);

	for (let x = 0; x < sk.width / 2; x += 2) {
		for (let y = 0; y < sk.height / 2; y += 2) {
			const pSize = sk.random(0.5, 1.0);
			const pDiv = sk.random(-2.0, 2.0);
			let pSat = 0.0;

			if ((x + y) % 3 === 0) {
				pSat = 80.0;
			}

			sk.strokeWeight(pSize);
			sk.stroke(baseHue % 360, pSat, 30.0, 70.0);
			sk.point(x + pDiv, y + pDiv);
			sk.point(-x + pDiv, y + pDiv);
			sk.point(x + pDiv, -y + pDiv);
			sk.point(-x + pDiv, -y + pDiv);
		}
	}
}

function drawVector(
	sk,
	plotMax,
	plotDiv,
	plotMult,
	initDiv,
	baseHue,
	baseBri,
	baseSize
) {}

///
///
///
function loopOne(sk) {
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
}
