document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	let g = 0.098; // gravity
	let mouseX = 0;
	let mouseY = 0;

	// Ball
	let ball = new Ball(30, 'blue');
	ball.x = 450;
	ball.y = 80;
	ball.context = context;

	// mouse event
	canvas.addEventListener('mousemove', (e) => {
		let boundings = canvas.getBoundingClientRect();
		mouseX = e.clientX - boundings.left;
		mouseY = e.clientY - boundings.top;
	});

	window.requestAnimationFrame(animationLoop);

	function animationLoop() {
		// clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		// update
		ball.vy += g;
		ball.y += ball.vy;

		// mouse collision check
		if (Math.sqrt(Math.pow(ball.x - mouseX, 2) + Math.pow(ball.y - mouseY, 2)) < ball.r) {
			ball.vy *= -1;
		}

		// draw
		ball.draw();

		// Animate
		window.requestAnimationFrame(animationLoop);
	}

	window.requestAnimationFrame = (function() {
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			}
		);
	})();
});
