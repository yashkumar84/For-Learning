import { Task } from "../models/model.js";

export let taskService = {
  tasks: [],
  addTask(taskObject) {
    let id = Math.floor(Math.random() * 100000000);
    let newTask = new Task({ ...taskObject, id: id });
    this.tasks.push(newTask);
  },
  deleteTask(id) {
    let index = this.tasks.findIndex((task) => task.id === id);

    this.tasks.splice(index, 1);
  },
  updateTask(taskObject, id) {
    let index = this.tasks.findIndex((task) => task.id === id);
    console.log(index, id);

    let newTask = new Task({ ...taskObject, id: id });
    console.log("New Object", newTask);
    this.tasks.splice(index, 1, newTask);
  },
  getTaskById(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      return task;
    }
  },
};
