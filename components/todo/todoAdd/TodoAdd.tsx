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
import { TodoForm } from "../";
import { tasksStore } from "../../../stores";

export const TodoAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addTask, newTask } = tasksStore;

  const handleSubmit = () => {
    if (newTask.task) addTask();
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
