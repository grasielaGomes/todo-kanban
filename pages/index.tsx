import type { NextPage } from "next";
import { Stack } from "@chakra-ui/react";
import { BasicTemplate } from "../components/layouts";
import { PageHeader } from "../components/pageHeader";
import { TodoContainer } from "../components/todo";

const HomePage: NextPage = () => {
  return (
    <BasicTemplate title="Home | Todo Kanban">
      <Stack spacing="6">
        <PageHeader numberTasks="2" title="My Board" />
        <TodoContainer />
      </Stack>
    </BasicTemplate>
  );
};

export default HomePage;
