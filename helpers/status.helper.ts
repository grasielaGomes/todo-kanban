export const STATUS_COLUMNS: string[] = ["todo", "progress", "done"];

export const STATUS_TITLES: { [key: string]: string } = {
  todo: "Todo",
  progress: "In Progress",
  done: "Done"
};

export type Status = "todo" | "progress" | "done";
