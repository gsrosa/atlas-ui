import type { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const meta = {
  title: "Feedback/Popover",
  component: Popover,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ display: "grid", gap: "0.25rem" }}>
            <h4 style={{ fontWeight: 500, fontSize: "14px" }}>Dimensions</h4>
            <p style={{ fontSize: "12px", color: "#8e8e8e" }}>Set the dimensions for the layer.</p>
          </div>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Label htmlFor="width" style={{ width: "60px" }}>Width</Label>
              <Input id="width" defaultValue="100%" inputSize="sm" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Label htmlFor="height" style={{ width: "60px" }}>Height</Label>
              <Input id="height" defaultValue="25px" inputSize="sm" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
