document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	// transform fns
	// context.transform(m11, m12, m21, m22, dx, dy)
	// context.setTransform(m11, m12, m21, m22, dx, dy)
	// context.resetTransform()

	// rectangle
	context.fillStyle = 'red';
	context.fillRect(150, 150, 200, 100);
	context.fill();

	// Scale transform
	context.transform(1.5, 0, 0, 1.5, 0, 0);

	// rectangle
	context.fillStyle = 'blue';
	context.fillRect(150, 150, 200, 100);
	context.fill();

	// Scale transform
	context.transform(1.5, 0, 0, 1.5, 0, 0);

	// rectangle
	context.fillStyle = 'green';
	context.fillRect(150, 150, 200, 100);
	context.fill();

	// Scale transform
	context.transform(1.5, 0, 0, 1.5, 0, 0);
});
