import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./label";

const meta = {
  title: "General/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Email address" },
};

export const WithHtmlFor: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Label htmlFor="email">Email address</Label>
      <input id="email" type="email" placeholder="you@example.com" style={{ padding: "0.5rem", border: "1px solid #e1e1e1", borderRadius: "0.375rem" }} />
    </div>
  ),
};
