document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');

	// draw images
	// drawImage(img, dX, dY)
	// drawImage(img, dX, dY, dw, dh)
	// drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

	let img = new Image();
	img.src = '../img/amster.jpeg';

	img.onload = () => {
		context.drawImage(img, 50, 50, 500, 300);

		// image data functions
		// createImageData() - Creates a new blank ImageData object
		// getImageData(xCoord, yCoord, width, height) - Returns an imageData object that copies the pixel data for the specified rectangle
		// putImageData(imageData, xCoord, yCoord, width, height) - Puts the image data (from a specified ImageData object) back onto the canvas

		let imageData = context.getImageData(50, 50, 500, 300);

		// R - The color Red (from 0-255)
		// G - The color Green (from 0-255)
		// B - The color Blue (from 0-255)
		// A - The Alpha channel ((from 0-255), 0 - is a transparent and 255 - is fully visible)

		for (let i = 0; i < imageData.data.length; i += 4) {
			let average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;

			imageData.data[i] = average; // Red
			imageData.data[i + 1] = average; // Green
			imageData.data[i + 2] = average; // Blue
			// imageData.data[i + 3] = 150; // Alpha
		}

		context.putImageData(imageData, 50, 50);
	};
});
