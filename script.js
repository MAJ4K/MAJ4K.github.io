const cards = document.getElementsByClassName("card");

for (const card of cards) {
	card.addEventListener('click',e => {
		for (const ncard of cards)
			ncard.classList.remove('active');
		if (!card.classList.contains('active'))
			card.classList.add('active');
	});
}