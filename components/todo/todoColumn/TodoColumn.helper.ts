import { CardsI } from ".";
import { v4 as uuidv4 } from "uuid";

export const CARDS: CardsI = {
  todo: [
    {
      createAt: "Sept 2th 2022",
      _id: uuidv4(),
      task: "Deleniti voluptatibus debitis natus qui maiores nesciunt magni illum cupiditate quas! Dolorum inventore temporibus a vero nostrum dignissimos mollitia vitae adipisci nisi.",
      taskType: "discovery",
      status: "todo"
    }
  ],
  progress: [
    {
      createAt: "Sept 2th 2022",
      _id: uuidv4(),
      task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus debitis natus qui maiores nesciunt magni illum cupiditate quas! Dolorum inventore temporibus a vero nostrum dignissimos mollitia vitae adipisci nisi.",
      taskType: "feature",
      status: "progress"
    }
  ],
  done: [
    {
      createAt: "Sept 2th 2022",
      _id: uuidv4(),
      task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus debitis natus qui maiores nesciunt magni illum cupiditate quas!",
      taskType: "bug",
      status: "done"
    }
  ]
};
