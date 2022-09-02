import { Box, Stack, useColorModeValue, Heading } from "@chakra-ui/react";
import { TodoCard } from "../";
import { TodoColumnI } from "./";

export const TodoColumn = ({ cards, title }: TodoColumnI) => {
  const backgroundColor = useColorModeValue("light.100", "dark.700");
  return (
    <Box
      minH="75vh"
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
        {cards &&
          cards.map(({ createAt, id, task, taskType, status }) => {
            return (
              <TodoCard
                key={id}
                createAt={createAt}
                id={id}
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
