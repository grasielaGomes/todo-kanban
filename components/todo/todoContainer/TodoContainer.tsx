import { SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { TodoColumn } from "../";
import { Columns } from "./";

export const TodoContainer = () => {
  const bg = useColorModeValue("light.50", "dark.800");
  return (
    <SimpleGrid
      columns={[1, 2, 2, 3]}
      spacing="1"
      bg={bg}
      borderRadius="2xl"
      overflow="hidden"
    >
      {Columns.map((column) => (
        <TodoColumn key={column} title={column} />
      ))}
    </SimpleGrid>
  );
};