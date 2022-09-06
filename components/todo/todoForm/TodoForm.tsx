import { ChangeEventHandler } from "react";
import { FormLabel, Stack, Textarea, Box } from "@chakra-ui/react";
import { TodoRadio } from "../";
import {
  STATUS_COLUMNS as statusList,
  STATUS_TITLES as statusTitles,
  TYPES as types,
  TYPES_TITLES as typesTitles,
  Status,
  Types
} from "../../../helpers";
import { tasksStore } from "../../../stores";

export const TodoForm = () => {
  const { newTask } = tasksStore;

  const handleTaskChange: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    (newTask.task = e.target.value);
  const handleStatusChange = (value: string) =>
    (newTask.status = value as Status);
  const handleTypeChange = (value: string) =>
    (newTask.taskType = value as Types);

  return (
    <Stack spacing="6">
      <Box>
        <FormLabel fontWeight="bold">Task Description</FormLabel>
        <Textarea onChange={handleTaskChange} />
      </Box>
      <TodoRadio
        handleChange={handleTypeChange}
        map={typesTitles}
        options={types}
        title="Task Type"
      />
      <TodoRadio
        handleChange={handleStatusChange}
        map={statusTitles}
        options={statusList}
        title="Task Status"
      />
    </Stack>
  );
};
