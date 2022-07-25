import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FaAddressCard } from "react-icons/fa";

import Empty from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Empty",
  component: Empty,
} as ComponentMeta<typeof Empty>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  icon: <FaAddressCard size="30" />,
  title: "Empty",
};
