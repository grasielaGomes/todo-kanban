import { tasksApi } from ".";
import { Status } from "../helpers";

export const updateTaskApi = async (_id: string, status: Status) => {
  try {
    await tasksApi.put(`/tasks/${_id}`, { status });
  } catch (err) {
    console.error(err);
  }
};
