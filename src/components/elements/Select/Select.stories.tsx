import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "Components/Elements/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // options: { control: "array" },
    value: { control: "text" },
    clearable: { control: "boolean" },
    multiple: { control: "boolean" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
    clearable: true,
    multiple: false,
    placeholder: "Select an option",
    disabled: false,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
