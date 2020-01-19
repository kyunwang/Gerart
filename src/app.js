import 'https://cdn.jsdelivr.net/npm/p5';

import { h, Component, render } from 'preact';
import { Route, Switch } from 'wouter-preact';
import Home from './pages/Home.js';
import Sketches from './pages/Sketches.js';

// const HomePage = lazy(() => import('./pages/Home'));

const App = (
	<Switch>
		<Route path="/" component={Home} />
		<Route path="/sketches" component={Sketches} />
	</Switch>
);

render(App, document.getElementById('app'));
