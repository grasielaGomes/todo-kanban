import { proxy } from "valtio";
import { v4 as uuidv4 } from "uuid";
import { TodoCardI } from "../components/todo";
import { removeTask, addTask, formatDate } from "../utils";
import { updateTask } from "../utils/tasks";

interface TasksStoreI {
  addTask: () => void;
  isDragging: boolean;
  newTask: TodoCardI;
  tasks: TodoCardI[];
  tasksCounter: number;
  toogleDragging: () => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, status: string) => void;
}

export const tasksStore: TasksStoreI = proxy<TasksStoreI>({
  addTask: () => {
    tasksStore.tasks = addTask(tasksStore.tasks, tasksStore.newTask);
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
  removeTask: (id: string) => {
    tasksStore.tasks = removeTask(tasksStore.tasks, id);
    tasksStore.tasksCounter--;
  },
  updateTask: (id: string, status: string) => {
    tasksStore.tasks = updateTask(tasksStore.tasks, id, status);
  }
});
