import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box
} from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";
import { TodoCardI, TodoForm } from "../";
import { tasksStore } from "../../../stores";
import tasksApi from "../../../apis/tasksApi";

export const TodoAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addTask, newTask } = tasksStore;

  const addTaskDb = async (newTask: TodoCardI) => {
    if (process.env.NODE_ENV === "development") {
      try {
        const { data } = await tasksApi.post("/tasks", newTask);
        addTask(data);
      } catch (err) {
        console.error(err);
      }
    } else {
      addTask(newTask);
    }
  };

  const handleSubmit = () => {
    if (newTask.task) {
      addTaskDb(newTask);
    }
    onClose();
  };

  return (
    <Box w="fit-content">
      <Button
        leftIcon={<PlusCircle size="20" weight="bold" />}
        onClick={onOpen}
        colorScheme="blue"
      >
        Add new task
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "lg"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TodoForm />
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr="3" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
