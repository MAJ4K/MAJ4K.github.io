let state = 0;
const mains = document.getElementsByTagName('main');
const btns = {
	W: document.getElementById('W'),
	A: document.getElementById('A'),
	S: document.getElementById('S'),
	D: document.getElementById('D'),
	E: document.getElementById('E'),
	B: document.getElementById('B'),
	st: document.getElementById('st'),
	se: document.getElementById('se'),
};

btns.W.style.gridArea = 'W';
btns.A.style.gridArea = 'A';
btns.S.style.gridArea = 'S';
btns.D.style.gridArea = 'D';
btns.E.style.gridArea = 'E';
btns.B.style.gridArea = 'B';
btns.st.style.gridArea = 'st';
btns.se.style.gridArea = 'se';

addEventListener('keyup', e => {
	switch (e.key) {
		case 'w': btns.W.click(); break;
		case 'a': btns.A.click(); break;
		case 's': btns.S.click(); break;
		case 'd': btns.D.click(); break;
		case 'Enter': btns.E.click(); break;
		case 'Backspace': btns.B.click(); break;
		case 'p': btns.st.click(); break;
		case 'i': btns.se.click(); break;
	}
});

function changeState(s) {
	state = s;
	for (const m of mains){
		m.classList.remove('active')
	}
	mains[s].classList.add('active');
}


btns.E.addEventListener('click', ()=>{
	switch (state) {
		case 0:
			changeState(1);
			break;
	}
});
btns.B.addEventListener('click', ()=>{
	switch (state) {
		case 0:
			changeState(1);
			break;
		case 1:
			changeState(0);
			break;
	}
});