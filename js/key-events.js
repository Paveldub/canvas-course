document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	// Key events
	// - keydown
	// - keypress
	// - keyup

	// Keyboard definitions
	let arrowKeyCodes = {
		left: 37,
		up: 38,
		right: 39,
		down: 40
	};

	window.addEventListener('keydown', (e) => {
		switch (e.keyCode) {
			case arrowKeyCodes.left:
				console.log('left arrow');
				break;
			case arrowKeyCodes.up:
				console.log('up arrow');
				break;
			case arrowKeyCodes.right:
				console.log('right arrow');
				break;
			case arrowKeyCodes.down:
				console.log('down arrow');
				break;
		}
	});
});
