import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Value = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Value.args = {
  value: "Button",
  name: "button",
};

export const SubmitType = Template.bind({});
SubmitType.args = {
  value: "Submit Button",
  type: "submit",
};

export const ButtonType = Template.bind({});
ButtonType.args = {
  value: "Button",
  type: "button",
};
