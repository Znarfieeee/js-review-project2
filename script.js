let todos = [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li'); // Create a new list element
        li.className = 'todo-item' // Add class to the li element
        li.innerHTML = `
        <span>${todo}</span>
        <button onclick="editTodo(${index})">Edit</button>
        <button onclick="deleteTodo(${index})">Delete</button>
        `; // Add the todo text and a delete button to the li element
        todoList.appendChild(li); // Add the li element to the ul element
    })
}

addTodo = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    const newTodo = todoInput.value; // Get the value of the input
    if (newTodo) {
        todos.push(newTodo); // Add the new todo to the todos array
        todoInput.value = ''; // Clear the input
        renderTodos(); // Render the todos
    }
}

editTodo = (index) => {
    const updatedTodo = prompt("edit your todo: ", todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

deleteTodo = (index) => {
    if(confirm("Are you sure you want to delete this todo?")) {
        todos.splice(index, 1);
        renderTodos();
    }
}