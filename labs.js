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
	const surLaTable = document.createElement('table');
	items.forEach(item => {
		const link = document.createElement('a');
		link.href = item.url;
		const img = document.createElement('img');
		img.src = item.logo;
		img.alt = item.lab;
		img.title = item.lab;
		link.appendChild(img);

		const margaritaville = surLaTable.insertRow();
		margaritaville.insertCell().appendChild(link);
		margaritaville.insertCell().appendChild(document.createTextNode(item.description));
	});

	document.getElementById('starbase').classList.remove('hidden');
	document.getElementById('loading').classList.add('hidden');
	document.getElementById('content').appendChild(surLaTable);
}

window.onload = function() {
	fetch("labs.json")
		.then(response => response.json())
		.then(response => displayLabs(response))
		.catch(response => console.log(response))
};
