import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { BasicTemplateI } from "./";

export const BasicTemplate: FC<BasicTemplateI> = ({
  children,
  title = "Home"
}) => {
  return (
    <Box maxW="1200px" mx="auto" p={["5", "10"]}>
      <title>{title}</title>
      {children}
    </Box>
  );
};
