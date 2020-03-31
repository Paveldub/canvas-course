document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	let isBackgroundLoaded = false;
	let isHeroLoaded = false;

	// background
	let background = new Image();
	background.src = '../img/back.png';
	background.onload = () => {
		isBackgroundLoaded = true;
	};

	// hero
	let hero = new Image();
	hero.src = '../img/sprite.png';
	hero.onload = () => {
		isHeroLoaded = true;
	};

	window.requestAnimationFrame(animationLoop);

	let cellWidth = 256;
	let cellHeight = 256;
	let currentCell = 0;

	//  time specifications
	let animationStart = new Date();

	// Move specifications
	let moveAmount = 15;
	let moveX = 100;

	function animationLoop() {
		let animateNow = new Date();

		if (animateNow - animationStart >= 100) {
			animationStart = animateNow;

			// clear canvas
			context.clearRect(0, 0, canvas.width, canvas.height);

			// update
			currentCell++;
			currentCell %= 6;
			if (moveX >= canvas.width) {
				moveX = -1 * cellWidth;
			} else {
				moveX += moveAmount;
			}

			// draw
			if (isBackgroundLoaded) {
				context.drawImage(background, 0, 0, canvas.width, canvas.height);
			}

			if (isHeroLoaded) {
				context.drawImage(hero, currentCell * cellWidth, 0, cellWidth, cellHeight, moveX, 280, 100, 100);
			}
		}

		// animate
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
