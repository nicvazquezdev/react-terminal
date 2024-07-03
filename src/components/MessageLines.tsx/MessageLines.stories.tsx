import { Meta, StoryFn } from "@storybook/react";
import "@/globals.css";
import { MessageLines, MessageLinesProps } from "./MessageLines";

export default {
  title: "Components/MessageLines",
  component: MessageLines,
} as Meta;

const Template: StoryFn<MessageLinesProps> = (args) => (
  <MessageLines {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message:
    "This is a line.\nThis is another line.\nAnd this is yet another line.",
};
