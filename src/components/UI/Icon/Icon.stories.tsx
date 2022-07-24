import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  name: "times",
  size: "normal",
};

export const Big = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Big.args = {
  name: "times",
  size: "big",
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  name: "times",
  size: "small",
};
