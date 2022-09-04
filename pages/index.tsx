import type { NextPage } from "next";
import { Stack } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { BasicTemplate } from "../components/layouts";
import { PageHeader } from "../components/pageHeader";
import { TodoContainer, TodoCardI } from "../components/todo";
import { tasksStore } from "../stores/tasksStore";

const HomePage: NextPage = () => {
  const { tasksCounter, tasks } = useSnapshot(tasksStore);
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
