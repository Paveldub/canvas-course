document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	let tile = new Image();
	tile.src = '../img/tile.png';

	tile.onload = () => {
		context.drawImage(tile, 0, 0, 768, 200, 60, 0, 768, 200);
	};

	let cellWidth = 192;
	let cellHeight = 200;

	drawTileCell(2);

	function drawTileCell(index) {
		context.drawImage(tile, index * cellWidth, 0, cellWidth, cellHeight, 360, 300, cellWidth, cellHeight);
	}

	window.requestAnimationFrame(animationLoop);

	let cell = 0;
	let start = new Date();

	function animationLoop() {
		let now = new Date();

		if (now - start >= 100) {
			start = now;

			// clear
			context.clearRect(0, 200, canvas.width, canvas.height - 200);

			// counter
			cell++;
			cell %= 4;

			// draw

			drawTileCell(cell);
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
