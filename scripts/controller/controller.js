import { taskService } from "../services/services.js";

window.addEventListener("load", initEvents);
let id;

function initEvents() {
  document.querySelector(".btn-add").addEventListener("click", addTask);
  document.querySelector(".btn-edit").addEventListener("click", editTask);
}

function addTask() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  taskService.addTask({ title: title.value, description: description.value });
  console.log("Task Added Successfully ");
  showTasks();
  title.value = "";
  description.value = "";
}

function showTasks() {
  const tasksDiv = document.querySelector(".tasks");
  tasksDiv.innerHTML = "";
  const tasks = taskService.tasks;
  console.log("Hello", tasks);
  tasks.map((task) => printCard(task, tasksDiv));
}

function deleteTask(id) {
  taskService.deleteTask(id);
  showTasks();
}

function editTaskInitialization(taskId) {
  const task = taskService.getTaskById(taskId);
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  title.value = task.title;
  description.value = task.description;
  id = taskId;
}

function editTask() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  taskService.updateTask(
    {
      title: title.value,
      description: description.value,
    },
    id
  );
  console.log("Task Updated Successfully ");
  showTasks();
}

function printCard(task, tasksDiv) {
  const div = document.createElement("div");
  div.classList = "card";
  const h3 = document.createElement("h3");
  h3.className = "title";
  h3.innerText = task.title;
  const p = document.createElement("p");
  p.className = "desc";
  p.innerText = task.description;
  const deleteIcon = document.createElement("i");
  deleteIcon.classList = "fa-solid fa-trash";
  deleteIcon.onclick = () => deleteTask(task.id);
  const editIcon = document.createElement("i");
  editIcon.classList = "fa-solid fa-pen";
  editIcon.onclick = () => editTaskInitialization(task.id);
  div.append(h3, p, deleteIcon, editIcon);
  tasksDiv.append(div);
}
