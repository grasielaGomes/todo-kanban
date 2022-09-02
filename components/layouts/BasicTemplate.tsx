import { FC } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const BasicTemplate: FC<Props> = ({ children }) => {
  return (
    <Box maxW="1200px" mx="auto" p={["5","10"]}>
      {children}
    </Box>
  );
};
