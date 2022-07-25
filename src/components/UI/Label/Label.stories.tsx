import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Label from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  text: "Label",
};

export const Normal = Template.bind({});
Normal.args = {
  text: "Normal Label",
  size: "normal",
};

export const Small = Template.bind({});
Small.args = {
  text: "Small Label",
  size: "small",
};

export const Big = Template.bind({});
Big.args = {
  text: "Big Label",
  size: "big",
};
