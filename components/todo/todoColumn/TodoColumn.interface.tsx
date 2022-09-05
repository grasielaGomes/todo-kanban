import { TodoCardI } from "../todoCard";

export interface TodoColumnI {
  tasks: TodoCardI[];
  status: string;
}