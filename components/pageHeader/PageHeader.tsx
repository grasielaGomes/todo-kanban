import {
  Flex,
  Heading,
  Center,
  Divider,
  Text,
  useColorMode,
  IconButton
} from "@chakra-ui/react";
import { SunDim, MoonStars } from "phosphor-react";
import { ICON_SIZE as iconSize, PageHeaderI } from "./";
import { COLORS as colors } from "../../styles";

export const PageHeader = ({ numberTasks = 0, title }: PageHeaderI) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isOneTask = Number(numberTasks) === 1;
  return (
    <>
      <Flex align="center" justify="space-between">
        <Flex align="baseline" gap="4">
          <Heading
            as="h2"
            bgGradient="linear(to-l, brand.purple, brand.pink)"
            bgClip="text"
          >
            {title}
          </Heading>
          <Center height="20px">
            <Divider orientation="vertical" />
          </Center>
          <Text>{`${numberTasks} ${isOneTask ? "task" : "tasks"}`}</Text>
        </Flex>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Change color mode"
          bg="transparent"
        >
          {colorMode === "light" ? (
            <SunDim size={iconSize} color={colors.blue} />
          ) : (
            <MoonStars size={iconSize} color={colors.yellow} />
          )}
        </IconButton>
      </Flex>
      <Divider />
    </>
  );
};
