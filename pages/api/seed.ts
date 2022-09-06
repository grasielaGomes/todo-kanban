import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedData } from "../../database";
import { Task } from "../../models";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "Access denied to this service" });
  }

  await db.connect();

  await Task.deleteMany();
  await Task.insertMany(seedData.tasks);

  await db.disconnect();

  res.status(200).json({ message: "Success" });
}
