import { tasksApi } from ".";

export const deleteTaskApi = async (_id: string) => {
  try {
    await tasksApi.delete(`/tasks/${_id}`);
  } catch (err) {
    console.error(err);
  }
};
