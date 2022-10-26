export class TaskError extends Error {
  constructor(message: string = "") {
    super(`Something went wrong. ${message}`);
    this.name = "TaskError";
  }
}
