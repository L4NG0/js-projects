let size = 10;
let orderElement = 1;

const init = () => {
    // tutaj kod
    const btn = document.createElement('button')
    document.body.appendChild(btn)
    btn.textContent = 'Dodaj 10 elementów listy'
    const ul = document.createElement('ul')
    document.body.appendChild(ul)
    btn.addEventListener('click', createLiElements)
}

const createLiElements = () => {
    // tutaj kod

    for (i = 1; i <= 10; i++) {
        const li = document.createElement('li')
        document.querySelector('ul').appendChild(li)
        li.textContent = `element nr ${orderElement++}`
        li.style.fontSize = `${size++}px`
    }
}

init()