const getButton = document.getElementById('addTaskButton');
const getInputfield = document.getElementById('inputfield');
const getUl = document.getElementById('listOfTasks');

const addTaskToDom = (data) => {
    
    data.forEach((task) => { 
    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
        newLi.innerText = task.description; 
    const newCheckbox = document.createElement('input');
        newCheckbox.setAttribute("type", "checkbox");
    const newTrashcan = document.createElement('button');
        newTrashcan.innerHTML = '<i class="fas fa-trash"></i>';

    newDiv.classList.add('newDiv');
    newLi.classList.add('newLi');
    newCheckbox.classList.add('newCheckbox');
    newTrashcan.classList.add('newTrashcan');
   
    getUl.appendChild(newDiv).appendChild(newLi).appendChild(newCheckbox);
    newLi.appendChild(newTrashcan);

    const id = task._id;

    newCheckbox.addEventListener('change', () => {
        newLi.style.textDecoration = 'line-through';
        putTask(id);
    });
    
    newTrashcan.addEventListener('click', () => {
        newDiv.removeChild(newLi);
        deleteTask(id);
    });

    getInputfield.value = ' ';
})
}

