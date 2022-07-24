import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Paginator from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Paginator",
  component: Paginator,
  argTypes: { onChange: { action: "changed!" } },
} as ComponentMeta<typeof Paginator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paginator> = (args) => <Paginator {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  totalCount: 50,
  pageSize: 10,
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  totalCount: 60,
  pageSize: 10,
  disabled: true,
};
