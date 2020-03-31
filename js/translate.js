document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	// original
	context.fillStyle = 'blue';
	context.fillRect(50, 50, 160, 160);
	context.fill();

	// translate
	context.translate(300, 200);

	// translated
	context.fillStyle = 'red';
	context.fillRect(50, 50, 160, 160);
	context.fill();
});
