import { useSnapshot } from "valtio";
import { Badge, Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { Clock, CaretLeft, CaretRight, Trash } from "phosphor-react";
import { TodoCardI, ARROW_ICON_SIZE as iconSize, useTodoCard } from "./";
import { tasksStore } from "../../../stores";

export const TodoCard = ({
  createAt,
  _id,
  task,
  taskType = "discovery",
  status = "todo"
}: TodoCardI) => {
  const { isDragging } = useSnapshot(tasksStore);
  const {
    bg,
    colorScheme,
    gray,
    handleDelete,
    handleMoveToNextStatus,
    handleMoveToPreviewStatus,
    label,
    onDragStart
  } = useTodoCard(_id, taskType, status);

  return (
    <Box px="2">
      <Box
        borderRadius="2xl"
        overflow="hidden"
        bg={bg}
        shadow="card"
        opacity={isDragging ? 0.3 : 1}
        draggable
        onDragStart={onDragStart}
      >
        <Stack spacing="4" px="4" pt="4" pb="2">
          <Flex align="center" gap="2">
            <Clock size="16" color={gray} weight="bold" />
            <Text color={gray} fontSize="xs" fontWeight="bold">
              {createAt as string}
            </Text>
          </Flex>
          <Text whiteSpace="pre-line">{task}</Text>
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
