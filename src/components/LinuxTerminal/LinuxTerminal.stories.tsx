import { Meta, StoryFn } from "@storybook/react";
import { LinuxTerminal, LinuxTerminalProps } from "./LinuxTerminal";
import "../../index.css";

export default {
  title: "Components/LinuxTerminal",
  component: LinuxTerminal,
  argTypes: {
    userPrompt: { control: "text" },
  },
} as Meta;

const Template: StoryFn<LinuxTerminalProps> = (args) => (
  <LinuxTerminal {...args} />
);

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  initialMessage: "This is a custom initial message",
};
