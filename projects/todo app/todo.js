let todoList = [
    { item: "rtyui", dueDate: "4/10/2023" },
    { item: "tyuio", dueDate: "4/10/2023" },
];
displayItems();
function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({ item: todoItem, dueDate: todoDate });
    displayItems();
    inputElement.value = "";
    dateElement.value = "";
}

function displayItems() {
    let containerElement = document.querySelector(".todo-container");
    let newHtml = "";

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i]
        if (item.trim('') !== "" && dueDate.trim('') !== "") {

            newHtml += `  
              
              
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="delete-btn" onclick='todoList.splice(${i},1);displayItems()'>Delete</button>
                
            `;
        }
    }
    containerElement.innerHTML = newHtml;
}
