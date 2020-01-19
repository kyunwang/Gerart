import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import TestSketch from '../sketches/Test.js';

function Sketches() {
	// useEffect(() => {
	// 	console.log('effect');
	// }, []);

	// console.log('render');

	return (
		// <main>
		// 	<p>Sketches</p>
		<TestSketch />
		// </main>
	);
}

export default Sketches;
