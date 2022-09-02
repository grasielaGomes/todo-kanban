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
import { IconSize, PageHeaderI } from "./";
import { Colors } from "../../styles";

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
            <SunDim size={IconSize} color={Colors.blue} />
          ) : (
            <MoonStars size={IconSize} color={Colors.yellow} />
          )}
        </IconButton>
      </Flex>
      <Divider />
    </>
  );
};
