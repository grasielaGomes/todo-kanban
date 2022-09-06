import { tasksApi } from "./";
import { TodoCardI } from "../components/todo";

export const addTaskApi = async (newTask: TodoCardI) => {
  try {
    const { data } = await tasksApi.post("/tasks", newTask);
    return data;
  } catch (err) {
    console.error(err);
  }
};
