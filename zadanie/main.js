const searchForm = document.querySelector(".search input")
const addForm = document.querySelector(".add button")
const counter = document.querySelector("p span")
const ul = document.querySelector("ul")
const li = document.getElementsByClassName("task")
const inputAdd = document.querySelector(".add input")
let arrTask = []

const removeTask = (e) => {
    e.target.parentNode.remove()
}

const addTask = (e) => {
    e.preventDefault()
    const tittleTask = inputAdd.value;
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = tittleTask + "<button>Usuń</button>";
    // arrTask.forEach(task => ul.appendChild(task))
    arrTask.push(task)
    ul.appendChild(task)
    inputAdd.value = ''
    task.querySelector('button').addEventListener('click', removeTask)
    console.log(arrTask)
}
const searchTask = (e) => {
    searchContent = e.target.value.toLowerCase()
    console.log(searchContent)
    searchText = arrTask
    arrTask = arrTask.filter(li => li.textContent.toLowerCase().includes(searchContent))
    ul.textContent = ''
    arrTask.forEach(li => ul.appendChild(li));
}



addForm.addEventListener('click', addTask)
searchForm.addEventListener('input', searchTask)