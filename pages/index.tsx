import { useCallback, useEffect } from "react";
import type { NextPage } from "next";
import { useSnapshot } from "valtio";
import { Stack } from "@chakra-ui/react";
import { BasicTemplate } from "../components/layouts";
import { PageHeader } from "../components/pageHeader";
import { TodoContainer, TodoCardI } from "../components/todo";
import { tasksStore } from "../stores";
import tasksApi from "../apis/tasksApi";

const HomePage: NextPage = () => {
  const { tasksCounter, tasks, refreshTasks } = useSnapshot(tasksStore);

  const getTasks = useCallback(async () => {
    if (process.env.NODE_ENV === "development") {
      try {
        const { data } = await tasksApi.get<TodoCardI[]>("/tasks");
        refreshTasks(data);
      } catch (err) {
        console.error(err);
      }
    }
  }, [refreshTasks]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <BasicTemplate title="Home | Todo Kanban">
      <Stack spacing="6">
        <PageHeader numberTasks={tasksCounter} title="My Board" />
        <TodoContainer tasks={tasks as TodoCardI[]} />
      </Stack>
    </BasicTemplate>
  );
};

export default HomePage;
