document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	let radian = Math.PI / 180;

	// rotate
	context.rotate(-10 * radian);

	context.fillStyle = 'red';
	context.fillRect(250, 250, 400, 160);
	context.fill();
});
