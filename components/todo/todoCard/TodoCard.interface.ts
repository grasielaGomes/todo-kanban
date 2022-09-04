export interface TodoCardI {
  createAt: string;
  _id: string;
  task: string;
  taskType: "discovery" | "feature" | "bug" | string;
  status: "todo" | "progress" | "done" | string;
}

export interface BadgeTypesI {
  [key: string]: {
    colorScheme: string;
    label: string;
  };
}
