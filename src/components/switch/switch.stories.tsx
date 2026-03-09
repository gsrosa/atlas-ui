import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./switch";
import { Label } from "../label";

const meta = {
  title: "Data Entry/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean", description: "Whether the switch is disabled" },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane Mode</Label>
    </div>
  ),
};
