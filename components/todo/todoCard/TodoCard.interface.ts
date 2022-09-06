import { Status, Types } from "../../../helpers";

export interface TodoCardI {
  createAt: string | Date;
  _id: string;
  task: string;
  taskType: Types;
  status: Status;
}

export interface BadgeTypesI {
  [key: string]: {
    colorScheme: string;
    label: string;
  };
}
