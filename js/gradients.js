document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');

	// gradient funcs
	// context.createLinearGradient(x1, y1, x2, y2)
	// context.createRadialGradient(x1, y1, r1, x2, y2, r2)
	// addColorStop(stop, color)

	/*

    LINEAR Gradient

	let linearGradient = context.createLinearGradient(240, 40, 420, 420);
	linearGradient.addColorStop(0, 'red');
	linearGradient.addColorStop(0.25, 'blue');
	linearGradient.addColorStop(0.5, 'pink');
	linearGradient.addColorStop(0.75, 'green');
    linearGradient.addColorStop(1, 'yellow');
    */

	// Radial gradient
	let radialGradient = context.createRadialGradient(570, 380, 300, 570, 300, 50);
	radialGradient.addColorStop(0, 'red');
	radialGradient.addColorStop(0.25, 'blue');
	radialGradient.addColorStop(0.5, 'pink');
	radialGradient.addColorStop(0.75, 'green');
	radialGradient.addColorStop(1, 'yellow');

	context.strokeStyle = 'blue';
	context.lineWidth = 4;
	context.fillStyle = radialGradient; // gradient variable
	context.rect(240, 40, 420, 420);
	context.stroke();
	context.fill();
});
