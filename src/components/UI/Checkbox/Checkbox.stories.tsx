import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Checkbox",
  component: Checkbox,
  argTypes: { onChange: { action: "changed!" } },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
  checked: true,
  label: "Checkbox",
};

export const UnChecked = Template.bind({});
UnChecked.args = {
  checked: false,
  label: "Checkbox",
};
