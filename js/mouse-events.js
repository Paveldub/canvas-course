document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('hello-world-canvas');
	let context = canvas.getContext('2d');
	canvas.style.border = '1px solid #000';

	// Mouse events
	// - mousedown / mouseup
	// - mouseover / mouseout
	// - mousemove
	// - click
	// - dbclick

	/*
	canvas.addEventListener('mousedown', (e) => {
		console.log('mousedown');
		console.log(e);
	});

	canvas.addEventListener('mouseup', (e) => {
		console.log('mouseup');
		console.log(e);
    });

    canvas.addEventListener('mousemove', (e) => {
        console.log('mouseMove');
        console.log(e);
    });
    canvas.addEventListener('click', (e) => {
		console.log('click');
		console.log(e);
    });
    */

	canvas.addEventListener('dblclick', (e) => {
		console.log('doubleClick');
		console.log(e);
	});
});
