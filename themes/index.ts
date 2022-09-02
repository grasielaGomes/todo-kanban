import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        backgroundColor: props.colorMode === "dark" ? "dark.900" : "white"
      }
    })
  },
  colors: {
    brand: {
      blue: "#3694FF",
      green: "#0F9549",
      pink: "#FF0080",
      purple: "#7928CA",
      yellow: "#ECC94B"
    },
    light: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB"
    },
    dark: {
      700: "#374151",
      800: "#1F2937",
      900: "#111827"
    }
  },
  shadows: {
    card: "1px 6px 20px #02384a1b"
  }
});

export default theme;
