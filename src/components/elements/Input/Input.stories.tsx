import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from "./Input";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";

const meta = {
  title: "Components/Elements/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    size: {
      control: "select",
      options: ["small", "middle", "large"],
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    disabled: false,
    size: "middle",
  },
};

export const WithPrefix: Story = {
  args: {
    placeholder: "Enter text...",
    disabled: false,
    size: "middle",
    prefix: <ClockCircleOutlined className="mr-2" />,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Cannot type here",
    disabled: true,
    size: "middle",
  },
};

export const LargeSize: Story = {
  args: {
    placeholder: "Large input",
    size: "large",
  },
};

export const InputErrorWithPrefix: Story = {
  args: {
    placeholder: "error input",
    size: "middle",
    status: "error",
    prefix: <ClockCircleOutlined className="mr-2" />,
  },
};
