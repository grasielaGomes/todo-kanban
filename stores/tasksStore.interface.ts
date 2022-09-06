import { TodoCardI } from "../components/todo";
import { Status } from "../helpers";

export interface TasksStoreI {
  addTask: (newTaskDb: TodoCardI) => void;
  isDragging: boolean;
  newTask: TodoCardI;
  tasks: TodoCardI[];
  tasksCounter: number;
  toogleDragging: () => void;
  refreshTasks: (tasks: TodoCardI[]) => void
  removeTask: (id: string) => void;
  updateTask: (id: string, status: Status) => void;
}
