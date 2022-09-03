export interface TodoCardI {
  createAt: string;
  _id: string;
  task: string;
  taskType?: "discovery" | "feature" | "bug";
  status?: "todo" | "progress" | "done";
}

export interface BadgeTypesI {
  [key: string]: {
    colorScheme: string;
    label: string;
  };
}
