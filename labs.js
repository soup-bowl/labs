/**
 * 4, 8, 15, 16, 23, 42.
 *
 * @package labs.soupbowl.io
 * @author soup-bowl
 */

/**
 * Lab definition.
 * @typedef {Object} LabDef
 * @property {string} lab Experiment name.
 * @property {string} description Experiment write-up.
 * @property {string} type Significant type of the experiment.
 * @property {string} logo URL to the image representing the experiment.
 * @property {string} url Experiment view URL.
 */

/**
 * Displays a table with labs.json data.
 *
 * @param {LabDef[]} items - Collection from the labs.json.
 */
function displayLabs(items) {
	const surLaTable = document.getElementById('content');
	items.forEach(item => {
		const woopDeDoop = document.createElement('div');
		woopDeDoop.style = `background-image:url(${item.logo});`;

		const header = document.createElement('h2');
		const headerLink = document.createElement('a');
		headerLink.innerText = item.lab;
		headerLink.href = (item.url.includes('http')) ? item.url : `${window.location.pathname.slice(0, -1)}${item.url}`;
		header.appendChild(headerLink);

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
