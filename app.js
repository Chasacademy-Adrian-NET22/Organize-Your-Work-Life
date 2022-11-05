// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
    /* Kolla först att du target functionen med console.log
    console.log('hejjj'); */
    //Prevent form from submitting
    event.preventDefault();
    //toDo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    ////Detta kommer sist nästan, Add todo to Localstore
    saveLocalTodos(todoInput.value);
    //Create CHECK button in the list
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
     //Create Trash button in the list
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>'
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
     //Append to tod-list
     todoList.appendChild(todoDiv);
     //Clear Todo Input Value, så det nollställs
     todoInput.value = "";
}

function deleteCheck(e){
    /* Kolla först att du target med console.log
    console.log(e.target); */

    const item = e.target;
    // Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
            });
        }  
    

    //Check Mark Knappen
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
                case "completed":
                    if(todo.classList.contains('completed')){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                    break;
            case "uncompleted":
            if (!todo.classList.contains("completed")){
                todo.style.display = "flex";
            }else {
                todo.style.display = "none";
            }
            break;
        }
    });
}

function saveLocalTodos(todo){
    // check ---- HEY do I already have thing in there!
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos =JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    let todos; 
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos =JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo)
} 

document.addEventListener("click", (e) => {
    console.log(e.target)

});