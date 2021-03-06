import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import css from 'csz';

import {
	Engine,
	Scene,
	FreeCamera,
	Vector3,
	HemisphericLight,
	MeshBuilder,
} from '@babylonjs/core';

const styleClass = css`
	:global(html),
	:global(body),
	:global(#app) {
		overflow: hidden;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	/* :global(main), */
	#renderCanvas {
		width: 100%;
		height: 100%;
		touch-action: none;
	}
`;

function TestSketch() {
	const canvasRef = useRef();

	useEffect(() => {
		const createScene = engine => {
			const scene = new Scene(engine);
			const camera = new FreeCamera('camera', new Vector3(0, 0, -10), scene);
			camera.setTarget(Vector3.Zero());
			camera.attachControl(canvasRef.current, false);

			const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);
			const sphere = new MeshBuilder.CreateSphere(
				'sphere',
				{ segments: 16, diameter: 2 },
				scene
			);
			sphere.position.y = 0;

			const ground = MeshBuilder.CreateGround('ground1', {
				height: 6,
				width: 6,
				subdivisions: 2,
			});

			return scene;
		};

		const engine = new Engine(canvasRef.current, true, {
			preserveDrawingBuffer: true,
			stencil: true,
		});
		const scene = createScene(engine);

		engine.runRenderLoop(() => {
			scene.render();
		});

		window.addEventListener('resize', function() {
			engine.resize();
		});
	}, []);

	return (
		<canvas ref={canvasRef} className={styleClass} id="renderCanvas"></canvas>
	);
}

export default TestSketch;
