import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Elements/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
      },
    },
    buttonLabel: { control: "text" },
  },
  args: {
    items: [
      { key: "1", label: "First Item" },
      { key: "2", label: "Second Item" },
      { key: "3", label: "Third Item" },
    ],
    placement: "bottomLeft",
    buttonLabel: "Click Me",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
