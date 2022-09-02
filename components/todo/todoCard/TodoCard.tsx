import {
  Badge,
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { Clock, CaretLeft, CaretRight, Trash } from "phosphor-react";
import {
  TodoCardI,
  BADGE_TYPES as badgeTypes,
  ICON_SIZE as iconSize
} from "./";
import { COLORS as colors } from "../../../styles";

export const TodoCard = ({
  createAt,
  task,
  taskType = "discovery",
  status = "todo"
}: TodoCardI) => {
  const { label, colorScheme } = badgeTypes[taskType];
  const bg = useColorModeValue("white", "dark.900");
  return (
    <Box px="2">
      <Box borderRadius="2xl" overflow="hidden" bg={bg} shadow="card">
        <Stack spacing="4" px="4" pt="4" pb="2">
          <Flex align="center" gap="2">
            <Clock size="16" color={colors.gray} weight="bold" />
            <Text color={colors.gray} fontSize="xs" fontWeight="bold">
              {createAt}
            </Text>
          </Flex>
          <Text>{task}</Text>
          <Badge
            variant="solid"
            w="fit-content"
            bg={colorScheme}
            py="1"
            px="3"
            borderRadius="full"
          >
            {label}
          </Badge>
        </Stack>
        <Flex align="center" gap="2" justify="space-between" pb="2">
          <IconButton
            disabled={status === "todo"}
            bg="transparent"
            aria-label="Change previews status"
            _hover={{
              color: "brand.purple"
            }}
            icon={<CaretLeft size={iconSize} weight="bold" />}
          />
          <IconButton
            bg="transparent"
            aria-label="Change next status"
            _hover={{
              color: "brand.pink"
            }}
            icon={<Trash size={iconSize} />}
          />
          <IconButton
            disabled={status === "done"}
            bg="transparent"
            aria-label="Change next status"
            _hover={{
              color: "brand.purple"
            }}
            icon={<CaretRight size={iconSize} weight="bold" />}
          />
        </Flex>
      </Box>
    </Box>
  );
};
