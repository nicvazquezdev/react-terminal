import { Meta, StoryFn } from "@storybook/react";
import { TerminalPrompt, TerminalPromptProps } from "./TerminalPrompt";

export default {
  title: "Components/TerminalPrompt",
  component: TerminalPrompt,
  argTypes: {
    username: { control: "text" },
  },
} as Meta;

const Template: StoryFn<TerminalPromptProps> = (args) => (
  <TerminalPrompt {...args} />
);

export const Default = Template.bind({});
Default.args = {
  username: "user@user",
  initialCommands: {
    info: "This is the info command. It provides information about the terminal.",
    help: "This is the help command. It lists all available commands.",
  },
};

export const CustomPrompt = Template.bind({});
CustomPrompt.args = {
  username: "admin@system",
  initialCommands: {
    info: "Admin info command response.",
    help: "Admin help command response.",
    custom: "This is a custom command response.",
  },
};
