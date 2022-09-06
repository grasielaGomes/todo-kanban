import { v4 as uuidv4 } from "uuid";
import { formatDate } from "./";
import { TodoCardI } from "../components/todo";
import { Status } from "../helpers";

export const tasksByColumns = (
  tasks: TodoCardI[],
  column: string
): TodoCardI[] => {
  return tasks.filter((task) => task.status === column);
};

export const updateTask = (
  tasks: TodoCardI[],
  id: string,
  status: Status
): TodoCardI[] =>
  tasks.map((task) => ({
    ...task,
    status: task._id === id ? status : task.status
  }));

export const formatTask = (tasks: TodoCardI[]): TodoCardI[] =>
  tasks.map((task) => ({
    ...task,
    createAt: formatDate(task.createAt as Date)
  }));

export const removeTask = (tasks: TodoCardI[], id: string): TodoCardI[] =>
  tasks.filter((task) => task._id !== id);

export const addTask = (tasks: TodoCardI[], task: TodoCardI) => [
  ...tasks,
  { ...task, _id: uuidv4(), createAt: formatDate(new Date()) }
];
