import { DragEvent } from "react";
import { useColorModeValue, useToken } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { BADGE_TYPES as badgeTypes } from "./";
import { tasksStore } from "../../../stores";
import {
  STATUS_COLUMNS as statusColumns,
  IS_DEVELOPMENT as isDevelopment,
  Status
} from "../../../helpers";
import { updateTaskApi, deleteTaskApi } from "../../../apis";

export const useTodoCard = (_id: string, taskType: string, status: string) => {
  const { label, colorScheme } = badgeTypes[taskType] || "";
  const bg = useColorModeValue("white", "dark.900");
  const [gray] = useToken("colors", ["brand.gray"]);
  const { toogleDragging, removeTask, updateTask } = useSnapshot(tasksStore);
  const idx = statusColumns.indexOf(status);

  const handleDelete = () => {
    removeTask(_id);
    isDevelopment && deleteTaskApi(_id);
  };

  const handleMoveToNextStatus = () => {
    const newStatus = statusColumns[idx + 1] as Status;
    updateTask(_id, newStatus);
    isDevelopment && updateTaskApi(_id, newStatus);
  };

  const handleMoveToPreviewStatus = () => {
    const newStatus = statusColumns[idx - 1] as Status;
    updateTask(_id, newStatus);
    isDevelopment && updateTaskApi(_id, newStatus);
  };

  const onDragStart = (event: DragEvent) => {
    toogleDragging();
    event.dataTransfer?.setData("task", _id);
  };
  return {
    bg,
    colorScheme,
    gray,
    handleDelete,
    handleMoveToNextStatus,
    handleMoveToPreviewStatus,
    label,
    onDragStart
  };
};
