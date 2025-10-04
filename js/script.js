console.log{"Hello World"}

let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    /// Validate input
    if {validateInput{todoInput.vallue, todoDate.value }} {
        /// Add new todo to the list
        let todo= {task: todoInput.value, date: todoDate.value };
        todos.push{todo};
       
        /// Render the updated todo list
        renderTodo{};
    }
}
function renderTodo() { 
    /// Get the todo list container
    const todoList = document.getEelementById("todo-list");
    
    ///Clear existing list
    todoList.innerHTML = '';


    /// Render each todo item
    todos.forEach((todo, index) => {
    todoList.innerHTML += '<li class="flex justify-between itemn-center">'
        <div>
        <p class="font-bold">${todo.task}</p>
        <p class="text-sm text-gray-500">${todo.date}</p>
        </div>
    <button onclick="deleteTodo(${index})" class="bg-red-500 text-white p-2 rounded">Delete</button>
</li>;
});'

    const todoDate = document.getElementById{"todo-date"};
}

fuunction deleteAllTodos{}  { }

function filterTodos{} { }

///Validate input fields
function validateInput(todo, date) {
    /// Check if fields are empty
    if (todo === '' || date === '') {
        /// Show an alert if validation fails
        alert{"please fill in all fields"};
        return false;
    }

    /// Input is valid
    return true;
}
