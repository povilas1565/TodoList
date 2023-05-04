const todo = document.querySelector("#todo");
const add = document.querySelector("#add");
const clean = document.querySelector("#clean");
const list = document.querySelector("#list");

// ADD TASK
const addClick = (event) => {
    event.preventDefault();
    const newTodo = todo.value.trim();
    if (newTodo.length === 0) return;
    list.innerHTML += `
    <div class="listItem">
    <label class="custom-checkbox">
        <input type="checkbox" value="value-1">
        <span class="custom-checkbox-text">${newTodo}</span>
    </label>
    </div>`;

    // DELETE TASK
    const todoList = document.querySelectorAll(".todo button");
    for (let i = 0; i < todoList.length; i++) {
        const element = todoList[i];
        element.addEventListener("click", handleClickDelete);
    }
    todo.value = "";
};

// DELETE TASK
const handleClickDelete = (event) => {
    console.log(event.currentTarget);
    const node = event.currentTarget;
    const parent = node.parentNode;
    parent.remove();
};

// ADD TASK
add.addEventListener("click", addClick);