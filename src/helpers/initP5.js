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
			events: {
				...newConfig.events,
				...config.events,
			},
		};
	}

	return new p5(sk => {
		sk.keyPressed = event => {
			// On shift + s
			if (sk.keyIsDown(16) && sk.keyIsDown(83)) {
				console.log('Save');

				// Save canvas as png/gif?
			}
			// console.log(sk.key, sk.keyCode);

			if (newConfig.events.keyPressed) {
				newConfig.events.keyPressed(sk, event);
			}
		};

		// Execute main code
		cb(sk, newConfig);
	});
}

export default initSketch;
