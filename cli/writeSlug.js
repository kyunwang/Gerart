const fs = require('fs');
const path = require('path');

const filePath = path.resolve('./src/test.json');

function writeSlugs() {
	const rawSheet = fs.readFileSync(filePath);
	const currentSheet = JSON.parse(rawSheet);

	const newSheet = currentSheet.map(sketch => {
		if (!sketch.slug) {
			return {
				...sketch,
				slug: sketch.name.toLowerCase().replace(new RegExp(' ', 'gi'), '-'),
			};
		}

		return sketch;
	});

	const stringSheet = JSON.stringify(newSheet);

	fs.writeFileSync(filePath, stringSheet);
}

writeSlugs();
