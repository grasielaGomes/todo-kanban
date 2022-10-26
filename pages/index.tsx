import { useCallback, useEffect } from "react";
import type { NextPage } from "next";
import { useSnapshot } from "valtio";
import { Stack } from "@chakra-ui/react";
import {
  BasicTemplate,
  PageHeader,
  TodoContainer,
  TodoCardI
} from "../components";
import { tasksStore } from "../stores";
import { getTasksApi } from "../apis";
import { IS_DEVELOPMENT as isDevelopment } from "../helpers";

const HomePage: NextPage = () => {
  const { tasksCounter, tasks, refreshTasks } = useSnapshot(tasksStore);

  const getTasks = useCallback(async () => {
    if (isDevelopment) {
      const { data } = await getTasksApi();
      data && refreshTasks(data);
    }
  }, [refreshTasks]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <BasicTemplate title="Todo Kanban">
      <Stack spacing="6">
        <PageHeader numberTasks={tasksCounter} title="My Board" />
        <TodoContainer tasks={tasks as TodoCardI[]} />
      </Stack>
    </BasicTemplate>
  );
};

export default HomePage;
