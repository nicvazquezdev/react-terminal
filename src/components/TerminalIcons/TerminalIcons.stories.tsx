import { Meta, StoryFn } from "@storybook/react";
import { TerminalIcons } from "./";
import "@/globals.css";
import { WindowActionsProvider } from "@/context/WindowActionsContext";

export default {
  title: "Components/TerminalIcons",
  component: TerminalIcons,
  decorators: [
    (Story) => (
      <WindowActionsProvider>
        <Story />
      </WindowActionsProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <TerminalIcons {...args} />;

export const Default = Template.bind({});
Default.args = {};
