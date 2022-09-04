import { v4 as uuidv4 } from "uuid";
import { TodoCardI } from "../components/todo";
import { formatDate } from "./";

export const tasksByColumns = (
  tasks: TodoCardI[],
  column: string
): TodoCardI[] => {
  return tasks.filter((task) => task.status === column);
};

export const updateTask = (
  tasks: TodoCardI[],
  id: string,
  status: string
): TodoCardI[] =>
  tasks.map((task) => ({
    ...task,
    status: task._id === id ? status : task.status
  }));

export const removeTask = (tasks: TodoCardI[], id: string): TodoCardI[] =>
  tasks.filter((task) => task._id !== id);

export const addTask = (tasks: TodoCardI[], task: TodoCardI) => [
  ...tasks,
  { ...task, _id: uuidv4(), createAt: formatDate(new Date()) }
];
