import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Task, TaskI } from "../../../models";

type Data = { message: string } | TaskI[] | TaskI;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getTasks(res);
    case "POST":
      return addTask(req, res);
    default:
      return res.status(400).json({ message: "Endpoint not found" });
  }
}

const getTasks = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const tasks = await Task.find().sort({ createAt: "asc" });
  await db.disconnect();

  res.status(200).json(tasks);
};

const addTask = async (req: NextApiRequest, res: NextApiResponse) => {
  const { task = "", taskType = "", status = "" } = req.body;
  const newTask = new Task({
    createAt: Date(),
    task,
    taskType,
    status
  });

  try {
    await db.connect();
    await newTask.save();
    await db.disconnect();
    return res.status(201).json(newTask);
  } catch (err) {
    await db.disconnect();
    console.log(err);

    return res.status(400).json({ message: "Bad request" });
  }
};
