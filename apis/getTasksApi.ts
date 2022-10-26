import { TaskError } from "../errors";
import { AxiosAdapter } from "../http";

export const getTasksApi = async () => {
  const httpGetClient = new AxiosAdapter();
  try {
    const { body } = await httpGetClient.get({url: "api/tasks"});
    return body;
  } catch (_) {
    throw new TaskError("Get tasks failed.");
  }
};
