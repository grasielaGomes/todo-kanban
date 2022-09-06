import { TodoCardI } from "../todoCard";
import { Status } from "../../../helpers";

export interface TodoColumnI {
  tasks: TodoCardI[];
  status: Status;
}