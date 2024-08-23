let possibilities = ['walcz', 'przemyśl to jeszcze raz'];
const btnAdd = document.querySelector('.add')
const btnClean = document.querySelector('.clean')
const btnAdvice = document.querySelector('.showAdvice')
const btnOptions = document.querySelector('.showOptions')
const text = document.querySelector('h1')

const addPossibility = (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    let possibility = input.value;
    possibilities.push(possibility);
    input.value = ''
    console.log(possibilities.join(', '));

}
const cleanList = (e) => {
    e.preventDefault();
    possibilities = [];
    text = [];
    console.log(possibilities.join(', '));
}

const showAdvice = () => text.textContent = possibilities[(Math.floor(Math.random() * possibilities.length))]

const showOptions = (e) => {
    e.preventDefault();
    alert(`Możliwe opcje to: ${possibilities.join(', ')}`);
}


btnAdd.addEventListener('click', addPossibility)
btnClean.addEventListener('click', cleanList)
btnAdvice.addEventListener('click', showAdvice)
btnOptions.addEventListener('click', showOptions)