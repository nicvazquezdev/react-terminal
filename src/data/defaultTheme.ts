import { Theme } from "@/types/types";

export const defaultTheme: Theme = {
  backgroundColor: "#310823",
  header: {
    textColor: "white",
    backgroundColor: "#20232a",
    icons: {
      fill: "lightgray",
    },
  },
  body: {
    textColor: "#fafafa",
    backgroundColor: "",
  },
  prompt: {
    textColor: "#fafafa",
    label: {
      textColor: "var(--green)",
    },
  },
};
