const PROJECTS = document.getElementById('PROJECTS');
var project_json = undefined;
fetch('./projects.json')
  .then((response) => response.json())
  .then((json) => project_json = json)
	.then(() => projectsFetched());

function projectsFetched() {
	project_json.forEach(project => {
		const card = document.createElement('div');
		const title = document.createElement('h3');
		const stack = document.createElement('h5');
		const links = document.createElement('div');
		card.appendChild(title);
		card.appendChild(stack);
		Object.entries(project["details"]).forEach(([key, value]) => {
			const dtitle = document.createElement('h4');
			const dtext = document.createElement('p');
			dtitle.title = key;
			dtext.innerText = value;
			card.appendChild(dtitle);
			card.appendChild(dtext);
		});
		card.appendChild(links);
		card.classList.add('card');

		title.innerText = project["title"];
		
		stack.classList.add('stack');
		project['stack'].forEach(sLine => {
			const sItem = document.createElement('p');
			sItem.title = sLine;
			stack.appendChild(sItem);
		});

		links.classList.add('links');
		Object.entries(project["links"]).forEach(([key, value]) => {
			const link = document.createElement('a');
			const image = document.createElement('img');
			link.appendChild(image);
			link.href = key;
			image.src = value;
			links.appendChild(link);
		});

		PROJECTS.appendChild(card);
	});
}
