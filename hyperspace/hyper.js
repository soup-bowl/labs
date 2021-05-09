function playBackgroundMusic() {
	audio = document.getElementById("bgaudio");

	if (audio.paused) {
		document.getElementById("bgaudio").play();
	} else {
		document.getElementById("bgaudio").pause();
	}
}

function generateStars() {
	starlot = document.createElement('div');
	let ww  = window.innerWidth;
	let wh  = window.innerHeight;

	for (let index = 0; index < 250; index++) {
		let x = Math.floor(Math.random() * ww) + 1;
		let y = Math.floor(Math.random() * wh) + 1;

		star = document.createElement('div');
		star.style.cssText = 'position:fixed;left:' + x + 'px;top:' + y + 'px;';
		starlot.appendChild(star);
	}

	document.getElementById("stars").appendChild(starlot);
}

window.onload = function() {
	generateStars();
};
