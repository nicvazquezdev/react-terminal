import { Meta, StoryFn } from "@storybook/react";
import { TerminalTemplate, TerminalTemplateProps } from ".";
import "../../globals.css";

export default {
  title: "Components/TerminalTemplate",
  component: TerminalTemplate,
  argTypes: {
    username: { control: "text" },
  },
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
};
