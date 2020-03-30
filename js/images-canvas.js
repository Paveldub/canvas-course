document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');

	// draw images
	// drawImage(img, dX, dY)
	// drawImage(img, dX, dY, dw, dh)
	// drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

	let img = new Image();
	img.src = '../img/artworks-000245009132-358qci-t500x500.jpg';

	img.onload = () => {
		context.drawImage(img, 150, 150, 200, 200, 250, 50, 300, 400);
	};
});
