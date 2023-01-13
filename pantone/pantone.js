/**
 * Colour swatch generator.
 *
 * @package labs.soupbowl.io
 * @author soup-bowl
 */

/**
 * Individual colour definitions for the COTY.
 * @typedef {Object} ColorDefs
 * @property {string} name
 * @property {string} code
 * @property {string} hex
 * @property {number[]} rgb
 */

/**
 * The colour of the year object.
 * @typedef {Object} ColorOfTheYear
 * @property {number} year
 * @property {string} url
 * @property {ColorDefs[]} colors
 */


/**
 * Constructs an individual colour swatch element.
 * @param {ColorOfTheYear} element The colour of the year details.
 * @param {ColorDefs} color The individual color swatch information.
 * @returns {HTMLDivElement}
 */
const buildSwatch = (element, color) => {
	let swatch = document.createElement("div");
	swatch.classList.add("swatch");

	let col = document.createElement("div");
	col.classList.add("color");
	col.style = `background-color: ${color.hex}`;
	coltext = document.createElement("h2");
	coltext.innerText = element.year;
	col.appendChild(coltext);

	let cotyName = document.createElement("div");
	cotyName.classList.add("color-name");
	let CotyStr = document.createElement("p");
	let CotyLnk = document.createElement("a");
	CotyLnk.innerText = color.name;
	CotyLnk.href = element.url;
	CotyStr.appendChild(CotyLnk);
	cotyName.appendChild(CotyStr);

	let details = document.createElement("div");
	details.classList.add("details");

	buildDetailSegment(details, color);

	swatch.appendChild(col);
	swatch.appendChild(cotyName);
	swatch.appendChild(details);

	return swatch;
}

/**
 * Builds the detail segment of the colour swatch.
 * @param {HTMLDivElement} element The HTML parent node to add the changes into.
 * @param {ColorDefs} node The individual colour segment of the COTY response. 
 */
const buildDetailSegment = (element, node) => {
	let colA = buildSwatchColumn(["Pantone", node.code], 'pantone');
	let colB = buildSwatchColumn([
		`HEX ${node.hex}`,
		`RGB ${node.rgb[0]}, ${node.rgb[1]}, ${node.rgb[2]}`
	], 'codes');

	element.appendChild(colA);
	element.appendChild(colB);
};

/**
 * Creates a swatch column.
 * @param {string[]} details Array of string information.
 * @param {string?} className Class name to assign to the element, if any.
 * @returns {HTMLDivElement}
 */
const buildSwatchColumn = (details, className = '') => {
	let col = document.createElement("div");
	col.classList.add(className);

	details.forEach((detail) => {
		let deet = document.createElement("p");
		deet.innerText = detail;
		col.appendChild(deet);
	});

	return col;
}

/**
 * Toggles the light and dark themes.
 */
const changeTheme = () => {
	const main = document.querySelector('html');
	if (main.dataset.theme === 'dark') {
		main.dataset.theme = '';
	} else {
		main.dataset.theme = `dark`;
	}
}

window.onload = () => {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.querySelector('html').dataset.theme = `dark`;
	}

	// https://gist.github.com/soup-bowl/9b497fabbbe3fb76f826bc5687e6698a
	fetch("https://gist.githubusercontent.com/soup-bowl/9b497fabbbe3fb76f826bc5687e6698a/raw/pantone-coty.yml")
		.then(response => response.json())
		.then(response => {
			response.forEach(element => {
				if (element.colors !== undefined) {
					element.colors.forEach(color => {
						document.getElementById("root").appendChild(buildSwatch(element, color));
					});
				}
			});
		})
		.catch(() => {
			let errTxt = document.createElement("p");
			errTxt.innerText = 'An error has occurred retrieving data';
			document.getElementById("root").appendChild(errTxt);
		})
};
