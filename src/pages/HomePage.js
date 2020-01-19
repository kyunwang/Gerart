import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

function HomePage() {
	const [sketches, setSketches] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await (await fetch('../test.json')).json();
			setSketches(data);
		};

		fetchData();
	}, []);

	return (
		<main>
			<h1>Sketches</h1>

			<ul>
				{sketches.length > 0 &&
					sketches.map(sketch => {
						return (
							<li>
								<a href={`/sketches/${sketch.slug}`}>{sketch.name}</a>
							</li>
						);
					})}
			</ul>
			{/* <TestSketch /> */}
		</main>
	);
}

export default HomePage;
