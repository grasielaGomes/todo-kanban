import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        backgroundColor: props.colorMode === "dark" ? "gray.900" : "gray.200"
      }
    })
  },
  colors: {}
});

export default theme;
