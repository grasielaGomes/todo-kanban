import { TaskError } from "../errors";
import { Status } from "../helpers";
import { AxiosAdapter } from "../http";

export const updateTaskApi = async (_id: string, status: Status) => {
  const httpPutClient = new AxiosAdapter();
  try {
    await httpPutClient.put({ url: `api/tasks/${_id}`, body: { status } });
  } catch (err) {
    console.log(err)
   throw new TaskError("Update task failed.");
  }
};
