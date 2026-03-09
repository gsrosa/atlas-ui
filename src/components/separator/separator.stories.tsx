import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "./separator";

const meta = {
  title: "General/Separator",
  component: Separator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the separator",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <div style={{ fontSize: "14px", fontWeight: 500 }}>Section A</div>
      <Separator style={{ margin: "12px 0" }} />
      <div style={{ fontSize: "14px", fontWeight: 500 }}>Section B</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", height: "24px", alignItems: "center", gap: "12px" }}>
      <span style={{ fontSize: "14px" }}>Blog</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: "14px" }}>Docs</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: "14px" }}>Source</span>
    </div>
  ),
};
