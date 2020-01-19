// import 'https://cdn.jsdelivr.net/npm/p5';

import { h, render, Fragment, Component } from 'preact';
import Router from 'preact-router';
import LazyRoute from 'preact-lazy-route';

const pagePaths = [{ path: '/', filePath: './pages/HomePage.js' }];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sketches: [],
		};
	}

	componentDidMount() {
		fetch('../test.json')
			.then(data => data.json())
			.then(sketches => {
				this.setState({ sketches });
			});
	}

	render(props, { sketches }) {
		return (
			<Router>
				{pagePaths.map(({ path, filePath }) => (
					<LazyRoute path={path} component={() => import(filePath)} />
				))}

				{sketches.length > 0 &&
					sketches.map(sketch => (
						<LazyRoute
							path={`/sketches/${sketch.slug}`}
							component={() => import(`./${sketch.path}`)}
						/>
					))}
			</Router>
		);
	}
}

render(<App />, document.getElementById('app'));

console.log(123456);
