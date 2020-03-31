document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	context.fillStyle = 'blue';
	context.fillRect(50, 50, 100, 40);
	context.fill();

	// scale
	context.scale(0.5, 0.5);

	context.fillStyle = 'red';
	context.fillRect(50, 50, 100, 40);
	context.fill();

	// scale
	context.scale(0.5, 0.5);

	context.fillStyle = 'green';
	context.fillRect(50, 50, 100, 40);
	context.fill();
});
