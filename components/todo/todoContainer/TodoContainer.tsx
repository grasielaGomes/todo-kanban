import { SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { TodoColumn, TodoAdd, TodoContainerI } from "../";
import { STATUS_COLUMNS as columns, Status } from "../../../helpers";
import { tasksByColumns } from "../../../utils";

export const TodoContainer = ({ tasks }: TodoContainerI) => {
  const bg = useColorModeValue("light.50", "dark.800");

  return (
    <>
      <TodoAdd />
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        spacing="1"
        bg={bg}
        borderRadius="2xl"
        overflow="hidden"
      >
        {columns.map((column) => (
          <TodoColumn
            key={column}
            status={column as Status}
            tasks={tasksByColumns(tasks, column)}
          />
        ))}
      </SimpleGrid>
    </>
  );
};
