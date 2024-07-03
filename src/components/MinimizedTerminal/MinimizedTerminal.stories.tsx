import { Meta, StoryFn } from "@storybook/react";
import { MinimizedTerminal } from ".";
import { WindowActionsProvider } from "@/context/WindowActionsContext";
import "@/globals.css";

export default {
  title: "Components/MinimizedTerminal",
  component: MinimizedTerminal,
  decorators: [
    (Story) => (
      <WindowActionsProvider>
        <Story />
      </WindowActionsProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <MinimizedTerminal {...args} />;

export const Default = Template.bind({});
Default.args = {};
