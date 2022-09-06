import { TodoCardI } from '../components/todo';

interface SeedDataI {
  tasks: Partial<TodoCardI>[]
}

export const seedData: SeedDataI = {
  tasks: [
    {
      createAt: Date(),
      task: "Deleniti voluptatibus debitis natus qui maiores nesciunt magni illum cupiditate quas! Dolorum inventore temporibus a vero nostrum dignissimos mollitia vitae adipisci nisi.",
      taskType: "discovery",
      status: "todo"
    },
    {
      createAt: Date(),
      task: "Deleniti voluptatibus debitis natus.",
      taskType: "bug",
      status: "todo"
    },
    {
      createAt: Date(),
      task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus debitis natus qui maiores nesciunt magni illum cupiditate quas! Dolorum inventore temporibus a vero nostrum dignissimos mollitia vitae adipisci nisi.",
      taskType: "feature",
      status: "progress"
    },
    {
      createAt: Date(),
      task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus debitis natus qui maiores nesciunt magni illum cupiditate quas!",
      taskType: "bug",
      status: "done"
    }
  ]
};