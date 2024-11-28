function playBackgroundMusic() {
	const audio = document.getElementById("bgaudio");

	if (audio.paused) {
		document.getElementById("bgaudio").play();
	} else {
		document.getElementById("bgaudio").pause();
	}
}

function generateStars() {
	const starlot = document.createElement('div');
	const ww  = window.innerWidth;
	const wh  = window.innerHeight;

	for (let index = 0; index < 250; index++) {
		const x = Math.floor(Math.random() * ww) + 1;
		const y = Math.floor(Math.random() * wh) + 1;

		const star = document.createElement('div');
		star.style.cssText = 'position:fixed;left:' + x + 'px;top:' + y + 'px;';
		starlot.appendChild(star);
	}

	document.getElementById("stars").appendChild(starlot);
}

window.onload = function() {
	generateStars();
};
