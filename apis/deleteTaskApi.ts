import { TaskError } from "../errors";
import { AxiosAdapter } from "../http";

export const deleteTaskApi = async (_id: string) => {
  const httpDeleteClient = new AxiosAdapter();
  try {
    await httpDeleteClient.delete({
      url: `api/tasks/${_id}`
    });
  } catch (_) {
    throw new TaskError("Delete task failed.");
  }
};
