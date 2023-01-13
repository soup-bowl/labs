window.onload = () => {
	fetch("https://gist.githubusercontent.com/soup-bowl/9b497fabbbe3fb76f826bc5687e6698a/raw/pantone-coty.yml")
		.then(response => response.json())
		.then(response => {
			response.forEach(element => {
				let swatch = document.createElement("div");
				swatch.classList.add("swatch");

				let col = document.createElement("div");
				col.classList.add("color");
				col.style = `background-color: ${element.colors[0].hex}`;
				coltext = document.createElement("h2");
				coltext.innerText = element.year;
				col.appendChild(coltext);

				let cotyName = document.createElement("div");
				cotyName.classList.add("color-name");
				let CotyStr = document.createElement("p");
				CotyStr.innerText = element.colors[0].name;
				cotyName.appendChild(CotyStr);
				
				let details = document.createElement("div");
				details.classList.add("details");

				let colA = document.createElement("div");
				colA.classList.add("pantone");
				let colA1 = document.createElement("p");
				colA1.innerText = "Pantone";
				let colA2 = document.createElement("p");
				colA2.innerText = element.colors[0].code;
				colA.appendChild(colA1);
				colA.appendChild(colA2);

				let colB = document.createElement("div");
				colB.classList.add("codes");
				let colB1 = document.createElement("p");
				colB1.innerText = `HEX ${element.colors[0].hex}`;
				let colB2 = document.createElement("p");
				colB2.innerText = `RGB ${element.colors[0].rgb[0]}, ${element.colors[0].rgb[1]}, ${element.colors[0].rgb[2]}`;
				colB.appendChild(colB1);
				colB.appendChild(colB2);

				details.appendChild(colA);
				details.appendChild(colB);

				swatch.appendChild(col);
				swatch.appendChild(cotyName);
				swatch.appendChild(details);

				document.getElementById("root").appendChild(swatch);
			});
		})
};
