import { FC } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { BasicTemplateI } from "./";

export const BasicTemplate: FC<BasicTemplateI> = ({
  children,
  title = "Home"
}) => {
  return (
    <Box maxW="1200px" mx="auto" p={["5", "10"]}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Box>
  );
};
