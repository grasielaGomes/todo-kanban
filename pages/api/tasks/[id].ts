import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { db } from "../../../database";
import { Task, TaskI } from "../../../models";

type Data = { message: string } | TaskI;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid id " + id });
  }

  switch (req.method) {
    case "PUT":
      return updateTask(req, res, id as string);
    case "DELETE":
      return deleteTask(res, id as string);

    default:
      return res
        .status(400)
        .json({ message: "This method does not exist " + req.method });
  }
}

const updateTask = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  id: string
) => {
  await db.connect();
  const taskToUpdate = await Task.findById(id);

  if (!taskToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "Id not found " + id });
  }

  const {
    task = taskToUpdate.task,
    taskType = taskToUpdate.taskType,
    status = taskToUpdate.status
  } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task, taskType, status },
      {
        runValidators: true,
        new: true
      }
    );
    await db.disconnect();
    res.status(200).json(updatedTask!);
  } catch (error: any) {
    await db.disconnect();
    res.status(400).json({
      message: error.errors.status?.message || error.errors.taskType?.message
    });
  }
};

const deleteTask = async (res: NextApiResponse<Data>, id: string) => {
  await db.connect();
  const taskToUpdate = await Task.findById(id);

  if (!taskToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "Id not found " + id });
  }

  try {
    await Task.deleteOne({ _id: id });
    await db.disconnect();
    res.status(200).json({ message: "Task deleted" });
  } catch (error: any) {
    await db.disconnect();
    res.status(500).json({
      message: "Server error"
    });
  }
};
