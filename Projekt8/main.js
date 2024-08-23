// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3', 'tekst4']
let txtI = 0
let eleI = 0
// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout


    if (txtI < txt.length) {
        if (eleI < txt[txtI].length) {
            spnText.textContent += (txt[txtI][eleI])
            eleI++
            setTimeout(() => addLetter(), 150)
        }
        else if ((eleI) === txt[txtI].length && (txtI + 1) < txt.length) {
            setTimeout(() => spnText.textContent = '', 1000)
            txtI++
            eleI = 0
            setTimeout(() => addLetter(), 1500)
        }
        else {
        }
    }
}

addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);