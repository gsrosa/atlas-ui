import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./checkbox";
import { Label } from "../label";

const meta = {
  title: "Data Entry/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean", description: "Whether the checkbox is disabled" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } };

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox id="opt1" defaultChecked />
        <Label htmlFor="opt1">Email notifications</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox id="opt2" />
        <Label htmlFor="opt2">SMS notifications</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox id="opt3" disabled />
        <Label htmlFor="opt3">Push notifications (coming soon)</Label>
      </div>
    </div>
  ),
};
