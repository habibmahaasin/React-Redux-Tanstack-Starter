import type { Meta, StoryObj } from "@storybook/react";
import TopNavigation from "./Top-navigation";

const meta = {
  title: "Components/Modules/TopNavigation",
  component: TopNavigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TopNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
