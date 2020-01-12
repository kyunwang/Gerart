import { h, Component, render } from '/web_modules/preact.js';

const app = h('div', null, 'Hello World~!');
console.log(123);

render(app, document.getElementById('app'));
