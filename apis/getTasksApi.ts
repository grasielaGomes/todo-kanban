import { TodoCardI } from "../components/todo";
import tasksApi from "./tasksApi";

export const getTasksApi = async () => {
  try {
    const { data } = await tasksApi.get<TodoCardI[]>("/tasks");
    return data;
  } catch (err) {
    console.error(err);
  }
};
