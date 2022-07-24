import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textbox from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Textbox",
  component: Textbox,
  argTypes: { onChange: { action: "changed!" } },
} as ComponentMeta<typeof Textbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />;

export const Value = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Value.args = {
  value: "Hello Textbox",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Write you Name!",
};
