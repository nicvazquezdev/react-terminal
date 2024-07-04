import { Meta, StoryFn } from "@storybook/react";
import { TerminalTemplate } from ".";
import { WindowActionsProvider } from "@/context/WindowActionsContext";
import "@/globals.css";
import { TerminalTemplateProps } from "@/types/types";

export default {
  title: "Components/TerminalTemplate",
  component: TerminalTemplate,
  argTypes: {
    username: { control: "text" },
    draggable: { control: "boolean" },
    theme: { control: "object" },
  },
  decorators: [
    (Story) => (
      <WindowActionsProvider>
        <Story />
      </WindowActionsProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<TerminalTemplateProps> = (args) => (
  <TerminalTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  initialMessage: `
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.
`,
  username: "user@linux-desktop",
  draggable: true,
  minimizedByDefault: false,
  theme: {
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
  },
};
