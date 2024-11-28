const params = new URLSearchParams(window.location.search);
let imposter = params.get('imposter');
const callsign = ((imposter == null) ? 'Dave' : imposter) + ' was the imposter.';

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function typeOutCallsign() {
	await sleep(1000);

	const signlength = callsign.length;
	let currentStr = '';
	const holder = document.getElementById('imposerCallsign');
	holder.innerHTML = '';

	typeSound();
	for (let i = 0; i < signlength; i++) {
		await sleep(100);
		currentStr = currentStr + callsign.charAt(i);
		holder.innerHTML = currentStr;
	}

	await sleep(10000);
	holder.innerHTML = '';
}

async function typeSound() {
	document.getElementById("sndTyping").play();
}

function moveImposter() {
	imposter = document.getElementById('imposter');
	imposter.style.display = null;
	const ww   = window.innerWidth;
	const endv = ww + 500;
	imposter.style.left = "500px";
	let degree = 0;

	let currentPos = -500;
	const motionInterval = setInterval(function() {
		currentPos += 2;
		degree     += 1;

		if ( degree > 360 ) {
			degree = 0;
		}

        if (currentPos >= endv) {
           clearInterval(motionInterval);
        }

        imposter.style.left = currentPos+"px";
		imposter.style.transform = 'rotate('+degree+'deg)';
    },1);

}

function generateStars() {
	const starlot = document.createElement('div');
	const ww  = window.innerWidth;
	const wh  = window.innerHeight;

	for (let i = 0; i < 250; i++) {
		const x = Math.floor(Math.random() * ww) + 1;
		const y = Math.floor(Math.random() * wh) + 1;

		const star = document.createElement('div');
		star.style.cssText = 'position:fixed;left:' + x + 'px;top:' + y + 'px;';
		starlot.appendChild(star);
	}

	document.getElementById("stars").appendChild(starlot);
}

function deployTheImposter() {
	typeOutCallsign();
	moveImposter();
}

window.onload = function() {
	generateStars();
	deployTheImposter();
};
