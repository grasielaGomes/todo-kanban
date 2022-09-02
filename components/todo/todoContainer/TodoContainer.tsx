import { SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { TodoColumn, CARDS as cards } from "../";
import { COLUMNS as columns, TITLES as titles } from "./";

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
      {columns.map((column) => (
        <TodoColumn key={column} title={titles[column]} cards={cards[column]} />
      ))}
    </SimpleGrid>
  );
};
