const sections = document.getElementsByTagName('section');
const abtn = document.getElementById('aboutbtn');
const about = document.getElementById('about');
const cards = sections[1].getElementsByClassName('card');
const links = document.getElementsByTagName('a');
let h4s = document.getElementsByTagName('h4'); 

function About(show) {
    const condition = sections[1].classList.contains('active');
    sections[1].classList.remove('active');
    abtn.classList.remove('active');
    about.classList.remove('active');
    if (!show) return;
    if (!condition){ 
        sections[1].classList.add('active');
        abtn.classList.add('active');
        about.classList.add('active');
        window.scrollTo(0,0);
    }
}

for (const card of cards) {
    card.addEventListener('click', e => {
        focusCard(card);
    });
}

function focusCard(id) {
    var cExpres = sections[1].clientWidth - cards[0].clientWidth;
    cExpres /= 2;
    window.scrollTo(0,sections[2].offsetTop/2);
    sections[1].scrollTo(id.offsetLeft - cExpres,0);
}

for (const h4 of h4s) {
    h4.addEventListener('click', e => {
        for (const h41 of h4s) {
            h41.classList.remove('active');
        }
        if (h4.classList.contains('active')) {
            h4.classList.remove('active');
        }
        h4.classList.add('active');
    });
}
document.addEventListener('scroll', e => {
    About(false);
})

