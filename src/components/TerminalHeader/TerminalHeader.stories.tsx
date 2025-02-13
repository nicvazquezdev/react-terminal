import { Meta, StoryFn } from "@storybook/react";
import { TerminalHeader, TerminalHeaderProps } from "./";
import { WindowActionsProvider } from "@/context/WindowActionsContext";
import "@/globals.css";

export default {
  title: "Components/TerminalHeader",
  component: TerminalHeader,
  argTypes: {
    username: { control: "text" },
    draggable: { control: "boolean" },
    handleMouseDown: { action: "handleMouseDown" },
    style: { control: "object" },
  },
  decorators: [
    (Story) => (
      <WindowActionsProvider>
        <Story />
      </WindowActionsProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<TerminalHeaderProps> = (args) => (
  <TerminalHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  username: "user@user",
  draggable: true,
  handleMouseDown: (event) => console.log("Mouse down event:", event),
  style: {
    color: "#FFF",
    backgroundColor: "#222",
  },
};
