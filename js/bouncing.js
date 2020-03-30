document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	let ballX = 400;
	let ballY = 300;
	let ballRadius = 30;
	let ballColor = 'orange';
	let changeX = 4;
	let changeY = 4;

	window.requestAnimationFrame(animationLoop);

	function animationLoop() {
		// clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		// update

		// bottom edge
		if (ballY + ballRadius > canvas.height) {
			changeY *= -1;
		}

		// right edge
		if (ballX + ballRadius > canvas.width) {
			changeX *= -1;
		}

		// top edge
		if (ballY - ballRadius < 0) {
			changeY *= -1;
		}

		// left edge
		if (ballX - ballRadius < 0) {
			changeX *= -1;
		}

		ballX += changeX;
		ballY += changeY;

		// draw
		drawBall(ballX, ballY, ballRadius, ballColor);

		// Animate
		window.requestAnimationFrame(animationLoop);
	}

	function drawBall(x, y, radius, color) {
		let radian = Math.PI / 180;

		context.beginPath();
		context.strokeStyle = color;
		context.fillStyle = color;
		context.arc(x, y, radius, 0, 360 * radian, false);
		context.stroke();
		context.fill();
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
