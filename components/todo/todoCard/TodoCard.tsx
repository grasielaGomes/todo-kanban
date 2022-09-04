import {
  Badge,
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useToken
} from "@chakra-ui/react";
import { Clock, CaretLeft, CaretRight, Trash } from "phosphor-react";
import { tasksStore } from "../../../stores";
import { STATUS_COLUMNS as statusColumns } from "../../../helpers";
import {
  TodoCardI,
  BADGE_TYPES as badgeTypes,
  ICON_SIZE as iconSize
} from "./";

export const TodoCard = ({
  createAt,
  _id,
  task,
  taskType = "discovery",
  status = "todo"
}: TodoCardI) => {
  const { label, colorScheme } = badgeTypes[taskType] || "";
  const bg = useColorModeValue("white", "dark.900");
  const [gray] = useToken("colors", ["brand.gray"]);
  const { removeTask, updateTask } = tasksStore;
  const idx = statusColumns.indexOf(status);
  
  const handleDelete = () => {
    removeTask(_id);
  };

  const handleMoveToNextStatus = () => {
    const newStatus = statusColumns[idx + 1];
    updateTask(_id, newStatus);
  };

  const handleMoveToPreviewStatus = () => {
    const newStatus = statusColumns[idx - 1];
    updateTask(_id, newStatus);
  };

  return (
    <Box px="2">
      <Box borderRadius="2xl" overflow="hidden" bg={bg} shadow="card">
        <Stack spacing="4" px="4" pt="4" pb="2">
          <Flex align="center" gap="2">
            <Clock size="16" color={gray} weight="bold" />
            <Text color={gray} fontSize="xs" fontWeight="bold">
              {createAt}
            </Text>
          </Flex>
          <Text>{task}</Text>
          {label && (
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
          )}
        </Stack>
        <Flex align="center" gap="2" justify="space-between" pb="2">
          <IconButton
            aria-label="Move to preview status"
            bg="transparent"
            disabled={status === "todo"}
            _hover={{
              color: "brand.purple"
            }}
            icon={<CaretLeft size={iconSize} weight="bold" />}
            onClick={handleMoveToPreviewStatus}
          />
          <IconButton
            aria-label="Delete task"
            bg="transparent"
            _hover={{
              color: "brand.pink"
            }}
            icon={<Trash size={iconSize} />}
            onClick={handleDelete}
          />
          <IconButton
            aria-label="Move to next status"
            bg="transparent"
            disabled={status === "done"}
            _hover={{
              color: "brand.purple"
            }}
            icon={<CaretRight size={iconSize} weight="bold" />}
            onClick={handleMoveToNextStatus}
          />
        </Flex>
      </Box>
    </Box>
  );
};
