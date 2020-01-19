const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const size = canvas.width;
const DPR = window.devicePixelRatio;

canvas.width = size * DPR;
canvas.height = size * DPR;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;
