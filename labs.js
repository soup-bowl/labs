/**
 * 4, 8, 15, 16, 23, 42.
 *
 * @package labs.soupbowl.io
 * @author soup-bowl
 */

/**
 * Render, parse and display markdown content into the main element.
 *
 * @param {string} r - Textual content (will be parsed for Markdown).
 */
function showContent(r) {		
	resetStage();
	document.getElementById('starbase').classList.remove('hidden');
	document.getElementById('starbase').innerHTML = marked(r);
}

/**
 * Retrieves and parses remote markdown content.
 *
 * @param {string} r - Textual content (will be parsed for Markdown).
 */
function showRemoteContent(url) {
	showLoading();
	fetch(url)
		.then(r => r.text())
		.then(r => {
			showContent(r);
		})
		.catch(e => {
			showError();
		});
}

/**
 * Shows a loading element on the screen.
 */
function showLoading() {
	resetStage();
	document.getElementById('loading').classList.remove('hidden');
}

/**
 * Shows an error page on the screen.
 */
function showError() {
	resetStage();
	document.getElementById('error').classList.remove('hidden');
}

/**
 * Resets all the relevant content areas to hidden.
 */
function resetStage() {
	document.getElementById('starbase').classList.add('hidden');
	document.getElementById('error').classList.add('hidden');
	document.getElementById('loading').classList.add('hidden');
	document.getElementById('starbase').innerHTML = "";
}

window.onload = function() {
	console.log(
		"Hello from soup-bowl! Glad to see you popped in with console.", "\n",
		"The markdown generation function is accessible and will over-write the content if you want some fun.", "\n",
		"showContent(text)      - Replaces the content with 'text', rendering markdown. CSS is fixed, so you might get some funky results.", "\n",
		"showRemoteContent(url) - Same as above, but grabs from the specified URL.", "\n",
	);

	showRemoteContent("https://raw.githubusercontent.com/soup-bowl/labs/main/README.md");
};
