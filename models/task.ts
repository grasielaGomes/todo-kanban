import mongoose, { Model, Schema } from "mongoose";
import { TodoCardI } from '../components/todo';

export interface TaskI extends TodoCardI {}

const taskSchema = new Schema({
  createAt: { type: Date },
  task: { type: String, require: true },
  taskType: {
    type: String,
    enum: {
      values: ["discovery", "feature", "bug"],
      message: "{VALUE} is not a valid type"
    },
    require: true,
    default: "discovery"
  },
  status: {
    type: String,
    enum: {
      values: ["todo", "progress", "done"],
      message: "{VALUE} is not a valid status"
    },
    require: true,
    default: "todo"
  }
});

const TaskModel: Model<TaskI> = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default TaskModel