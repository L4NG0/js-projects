// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/


const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
},
{
    img: "images/img2.jpg",
    text: 'Drugi tekst'
},
{
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
let time = 3000;
let active = 0;

// Implementacje

let keyChangeSlide = (event) => {
    if (event.keyCode === 39) {
        changeSlide()
    }
    if (event.keyCode === 37) {
        if (active === 0) {
            active = slideList.length
        }
        stopTimes()
        startTimes()
        active--
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
    }
}

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}
const changeSlide = () => {
    stopTimes()
    startTimes()
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}
setTimeout(startTimes, 0)
function startTimes() { start = setInterval(changeSlide, time) }
function stopTimes() { clearInterval(start) }
// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)