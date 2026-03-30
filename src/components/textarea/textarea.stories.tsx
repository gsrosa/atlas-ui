import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./textarea";
import { Label } from "../label";

const meta = {
  title: "Data Entry/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    textareaSize: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the textarea",
    },
    disabled: { control: "boolean", description: "Whether the textarea is disabled" },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Type your message here..." },
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", width: "320px" }}>
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself..." />
    </div>
  ),
};

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
};
