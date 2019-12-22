import p5 from 'p5/lib/p5.min.js';

const defaultConfig = {
	height: 500,
	width: 500,
	events: {
		keyPressed() {},
	},
};

function initSketch(cb, config) {
	let newConfig = defaultConfig;

	if (config) {
		newConfig = {
			...newConfig,
			...config,
		};
	}

	return new p5(sk => {
		sk.keyPressed = event => {
			// On shift + s
			if (sk.keyIsDown(16) && sk.keyIsDown(83)) {
				// Save canvas as png/gif?
			}

			if (events.keyPressed) {
				events.keyPressed();
			}
		};

		// Execute main code
		cb(sk, newConfig);
	});
}

export default initSketch;
