import { proxy } from "valtio";
import { v4 as uuidv4 } from "uuid";
import { TasksStoreI } from "./";
import {
  removeTask,
  addTask,
  formatDate,
  updateTask,
  formatTask
} from "../utils";
import { TodoCardI } from "../components/todo";
import { Status } from "../helpers";

export const tasksStore: TasksStoreI = proxy<TasksStoreI>({
  addTask: (newTaskDb: TodoCardI) => {
    tasksStore.tasks = addTask(tasksStore.tasks, newTaskDb);
    tasksStore.tasksCounter++;
    tasksStore.newTask = {
      createAt: formatDate(new Date()),
      _id: uuidv4(),
      task: "",
      taskType: "discovery",
      status: "todo"
    };
  },
  isDragging: false,
  newTask: {
    createAt: formatDate(new Date()),
    _id: uuidv4(),
    task: "",
    taskType: "discovery",
    status: "todo"
  },
  tasks: [],
  tasksCounter: 0,
  toogleDragging: () => {
    tasksStore.isDragging = !tasksStore.isDragging;
  },
  refreshTasks: (tasks: TodoCardI[]) => {
    tasksStore.tasks = formatTask(tasks);
    tasksStore.tasksCounter = tasks.length;
  },
  removeTask: (id: string) => {
    tasksStore.tasks = removeTask(tasksStore.tasks, id);
    tasksStore.tasksCounter--;
  },
  updateTask: (id: string, status: Status) => {
    tasksStore.tasks = updateTask(tasksStore.tasks, id, status);
  }
});
