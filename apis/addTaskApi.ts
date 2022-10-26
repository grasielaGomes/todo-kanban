import { TodoCardI } from "../components/todo";
import { AxiosAdapter } from "../http";
import { TaskError } from "../errors";

export const addTaskApi = async (newTask: TodoCardI) => {
  const httpPostClient = new AxiosAdapter();
  try {
    const { body } = await httpPostClient.post({
      url: "api/tasks",
      body: newTask
    });
    return body;
  } catch (error) {
    throw new TaskError("Task not added.");
  }
};
