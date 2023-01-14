/**
 * 4, 8, 15, 16, 23, 42.
 *
 * @package labs.soupbowl.io
 * @author soup-bowl
 */

/**
 * Displays a table with labs.json data.
 *
 * @param {array} items - Collection from the labs.json.
 */
function displayLabs(items) {
	const surLaTable = document.getElementById('content');
	items.forEach(item => {
		const woopDeDoop = document.createElement('div');
		const imgLink = document.createElement('a');
		imgLink.href = item.url;
		const img = document.createElement('img');
		img.src = item.logo;
		img.alt = item.lab;
		img.title = item.lab;
		imgLink.appendChild(img);

		const header = document.createElement('h2');
		const headerLink = document.createElement('a');
		headerLink.innerText = item.lab;
		headerLink.href = item.url;
		header.appendChild(headerLink);

		woopDeDoop.appendChild(imgLink);
		woopDeDoop.appendChild(header);

		surLaTable.appendChild(woopDeDoop);
	});

	document.getElementById('starbase').classList.remove('hidden');
	document.getElementById('loading').classList.add('hidden');
	document.getElementById('content').appendChild(surLaTable);
}

window.onload = function () {
	fetch("labs.json")
		.then(response => response.json())
		.then(response => displayLabs(response))
		.catch(response => console.log(response))
};
