import { DragEvent } from "react";
import { useSnapshot } from "valtio";
import { Box, Stack, useColorModeValue, Heading } from "@chakra-ui/react";
import { TodoColumnI } from "./";
import { TodoCard } from "../";
import { tasksStore } from "../../../stores/tasksStore";
import {
  STATUS_TITLES as titles,
  IS_DEVELOPMENT as isDevelopment
} from "../../../helpers";
import { updateTaskApi } from "../../../apis";

export const TodoColumn = ({ tasks, status }: TodoColumnI) => {
  const backgroundColor = useColorModeValue("light.100", "dark.700");
  const { isDragging, toogleDragging, updateTask } = useSnapshot(tasksStore);

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  };
  const onDropCard = (event: DragEvent) => {
    const task = event.dataTransfer.getData("task");
    updateTask(task, status);
    toogleDragging();
    isDevelopment && updateTaskApi(task, status);
  };
  return (
    <Box
      minH="70vh"
      p={["4", "6"]}
      transition="all 0.3s ease-in-out"
      bg={isDragging ? backgroundColor : ""}
      _hover={{
        backgroundColor
      }}
      onDrop={onDropCard}
      onDragOver={allowDrop}
    >
      <Stack spacing="6">
        <Heading as="h4" size="md">
          {titles[status]}
        </Heading>
        {tasks &&
          tasks.map(({ createAt, _id, task, taskType, status }) => {
            return (
              <TodoCard
                key={_id}
                createAt={createAt}
                _id={_id}
                task={task}
                taskType={taskType}
                status={status}
              />
            );
          })}
      </Stack>
    </Box>
  );
};
