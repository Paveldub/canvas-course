document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');

	// patern funcs
	// context.createPatter(image, repetition)
	// repetition
	// repeat: both directions
	// repeat-x: horizontal only
	// repeat-y: vertical only
	// no-repeat: neither

	let patternImg = new Image();
	patternImg.src = '../img/food-and-restaurant.png';

	patternImg.onload = () => {
		let pattern = context.createPattern(patternImg, 'repeat');
		context.fillStyle = pattern;
		context.fillRect(0, 0, 900, 450);
	};
});
