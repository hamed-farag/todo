import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  size: "normal",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Big = Template.bind({});
Big.args = {
  size: "big",
};
