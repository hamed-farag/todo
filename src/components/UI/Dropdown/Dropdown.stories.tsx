import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Framework/Dropdown",
  component: Dropdown,
  argTypes: { onChange: { action: "changed!" } },
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const NoDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoDefault.args = {
  defaultLabel: "Select Item",
  items: [
    { label: "item 1", value: "item1" },
    { label: "item 2", value: "item2" },
  ],
  selectedValue: null,
};

export const DefaultSelection = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultSelection.args = {
  defaultLabel: "Select Item",
  items: [
    { label: "item 1", value: "item1" },
    { label: "item 2", value: "item2" },
  ],
  selectedValue: "item2",
};

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  defaultLabel: "Select Item",
  loading: true,
  items: [
    { label: "item 1", value: "item1" },
    { label: "item 2", value: "item2" },
  ],
  selectedValue: null,
};
