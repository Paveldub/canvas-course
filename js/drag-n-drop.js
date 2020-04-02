window.onload = function() {
	// Definitions
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	let boundings = canvas.getBoundingClientRect();

	// Specs
	let balls = 5;
	let ballsArr = [];
	let currentBall = null;

	// Create Balls
	for (let i = 0; i < balls; i++) {
		let radius = getRandomInt(25, 50);
		let randColor = createRandomRGBColor();
		let ballColor = 'rgb(' + randColor.r + ',' + randColor.g + ',' + randColor.b + ')';
		let ball = new Ball(radius, ballColor);
		ball.context = context;
		ball.x = getRandomInt(radius, canvas.width - radius);
		ball.y = getRandomInt(radius, canvas.height - radius);
		ballsArr.push(ball);
	}

	drawBalls();

	function drawBalls() {
		// Clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		// Draws Balls
		for (let i = 0; i < balls; i++) {
			ballsArr[i].draw();
		}
	}

	function isHitOnBall(mx, my) {
		for (let i = balls - 1; i >= 0; i--) {
			if (Math.sqrt(Math.pow(mx - ballsArr[i].x, 2) + Math.pow(my - ballsArr[i].y, 2)) < ballsArr[i].r) {
				currentBall = ballsArr[i];
				break;
			}
		}
	}

	// Mouse Event Handlers
	canvas.addEventListener('mousedown', function(event) {
		console.log('mousedown');
		let mouseDownX = event.clientX - boundings.left;
		let mouseDownY = event.clientY - boundings.top;
		isHitOnBall(mouseDownX, mouseDownY);
	});

	canvas.addEventListener('mousemove', function(event) {
		console.log('mousemove');
		let mouseMoveX = event.clientX - boundings.left;
		let mouseMoveY = event.clientY - boundings.top;

		if (currentBall) {
			currentBall.x = mouseMoveX;
			currentBall.y = mouseMoveY;

			drawBalls();
		}
	});

	canvas.addEventListener('mouseup', function(event) {
		console.log('mouseup');
		currentBall = null;
	});
};

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomRGBColor() {
	let red = getRandomInt(0, 257);
	let green = getRandomInt(0, 257);
	let blue = getRandomInt(0, 257);
	return { r: red, g: green, b: blue };
}
