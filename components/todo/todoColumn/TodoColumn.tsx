import { Box, Stack, useColorModeValue, Heading } from "@chakra-ui/react";
import { TodoCard } from "../";
import { TodoColumnI } from "./";

export const TodoColumn = ({ tasks, title }: TodoColumnI) => {
  const backgroundColor = useColorModeValue("light.100", "dark.700");
  return (
    <Box
      minH="70vh"
      p={["4", "6"]}
      transition="all 0.3s ease-in-out"
      _hover={{
        backgroundColor
      }}
    >
      <Stack spacing="6">
        <Heading as="h4" size="md">
          {title}
        </Heading>
        {tasks &&
          tasks.map(
            ({ createAt, _id, task, taskType, status }) => {
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
            }
          )}
      </Stack>
    </Box>
  );
};
