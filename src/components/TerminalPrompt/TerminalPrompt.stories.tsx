import { Meta, StoryFn } from "@storybook/react";
import { TerminalPrompt, TerminalPromptProps } from "./TerminalPrompt";
import "../../index.css";

export default {
  title: "Components/TerminalPrompt",
  component: TerminalPrompt,
  argTypes: {
    userPrompt: { control: "text" },
    placeholder: { control: "text" },
  },
} as Meta;

const Template: StoryFn<TerminalPromptProps> = (args) => (
  <TerminalPrompt {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userLabel: "user@user",
};

export const CustomPrompt = Template.bind({});
CustomPrompt.args = {
  userLabel: "admin@system",
};
