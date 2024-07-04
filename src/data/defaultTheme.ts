import { Theme } from "@/types/types";

export const defaultTheme: Theme = {
  backgroundColor: "#111",
  header: {
    textColor: "#FFF",
    backgroundColor: "#222",
    icons: { fill: "#FFF" },
  },
  body: { textColor: "#EEE", backgroundColor: "#111" },
  prompt: {
    textColor: "#0F0",
    history: {
      textColor: "#FFF",
    },
  },
};
