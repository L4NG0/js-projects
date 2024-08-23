// tutaj rozwiązanie
const btn = document.querySelector('button')
// const elementsLi = document.querySelectorAll('li')
const elementsLi = [...document.getElementsByTagName('li')]

let currentSize = 10
// btn.addEventListener('click', function () {
//     for (let i = 0; i < elementsLi.length; i++) {
//         elementsLi[i].style.display = 'block'
//         elementsLi[i].style.fontSize = currentSize + 'px'
//     }
//     currentSize++
// })


btn.addEventListener('click', () => {
    elementsLi.forEach((elementLi) => {
        elementLi.style.display = 'block'
        elementLi.style.fontSize = currentSize + 'px'
    })
    currentSize++
})