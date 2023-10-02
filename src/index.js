
document.addEventListener("DOMContentLoaded", () => {
  
  const taskInput = document.getElementById("new-task-description");
  taskInput.addEventListener("input", (e) => {
    const userInput = e.target.value;
    })

  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  })

  const taskList = document.getElementById("tasks");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = taskInput.value;
    
    const taskItem = document.createElement("li");
    taskItem.textContent = userInput;
    taskList.appendChild(taskItem);
    taskInput.value = "";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = " X ";
    taskItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", (e) => {
      taskList.removeChild(taskItem);
    })
  })

  const priorityDropdown = document.createElement("task-priority");
  const selectedPriority = priorityDropdown.value;
  let taskClass;
  switch (selectedPriority) {
    case "high":
      taskClass = "high-priority";
      break;
    case "medium":
      taskClass = "medium-priority";
      break;
    case "low":
      taskClass = "low-priority";
      break;
    default:
      taskClass = "";
  }
  taskItem.classList.add(taskClass);


});


