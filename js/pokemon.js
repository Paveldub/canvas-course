document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');

	// draw images
	// drawImage(img, dX, dY)
	// drawImage(img, dX, dY, dw, dh)
	// drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

	let pokemon = new Image();
	pokemon.src = '../img/pokemon.png';

	pokemon.onload = () => {
		// pikachu
		context.drawImage(pokemon, 45, 50, 70, 70, 50, 50, 80, 80);
	};
});
