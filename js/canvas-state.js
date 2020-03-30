document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');

	// State Stack
	// context.save() - save the context state-canvas
	// context.restore() - restoring the state from the state stack

	// rect 1
	context.fillStyle = 'red';
	context.fillRect(0, 50, 200, 100);
	context.save();

	// rect 2
	context.fillStyle = 'blue';
	context.fillRect(220, 50, 200, 100);
	context.save();

	// rect 2
	context.fillStyle = 'yellow';
	context.fillRect(450, 50, 200, 100);
	context.save();

	// rect 3
	context.restore();
	context.fillRect(0, 200, 200, 100);

	// rect 4
	context.restore();
	context.fillRect(220, 200, 200, 100);

	// rect 5
	context.restore();
	context.fillRect(450, 200, 200, 100);
});
