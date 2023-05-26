const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function addTask() {
  const newTask = document.createElement("li");
  const taskText = document.createTextNode(newTaskInput.value);
  const deleteButton = document.createElement("button");
  const deleteButtonText = document.createTextNode("Excluir");

  deleteButton.appendChild(deleteButtonText);
  newTask.appendChild(taskText);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

  newTaskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

newTaskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", function(event) {
  const clickedTask = event.target;

  if (clickedTask.tagName === "LI") {
    clickedTask.classList.toggle("completed");
  } else if (clickedTask.tagName === "BUTTON") {
    clickedTask.parentNode.remove();
  }
});
