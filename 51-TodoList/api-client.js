const url = 'http://localhost:3000/';

//GET tasks
const getTasks = async () => {
    const response = await fetch(url, {
        method: "GET",    
        headers: {
            "content-type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data);
    addTaskToDom(data);
}

getTasks();

//POST task
const postTask = async () => {
    const newTask = getInputfield.value;
    const makeObject = {description: newTask, done: false};

        const response = await fetch(url, {
        method: "POST",    
        body: JSON.stringify(makeObject),
        headers: {
            "content-type": "application/json",
        }
    });
    const data = await response.json();
    addTaskToDom(data);
    return response; 
}

getButton.addEventListener('click', postTask);

//PUT task
const putTask = async (id) => {
   
    const response = fetch(url + id, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        }
    })
    return response;
}

//DELETE task
const deleteTask = async (id) => {
   
    const response = await fetch(url + id, {
        method: "DELETE"
    })
    return response;
}

