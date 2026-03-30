import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./tag";

const meta = {
  title: "General/Tag",
  component: Tag,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger", "neutral"],
      description: "The visual style of the tag",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the tag",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "Tag", variant: "default" } };
export const WithClose: Story = {
  args: { children: "Closable", variant: "default", onClose: () => {} },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Tag variant="default">Default</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="neutral">Neutral</Tag>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const Closable: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Tag variant="default" onClose={() => {}}>Default</Tag>
      <Tag variant="success" onClose={() => {}}>Success</Tag>
      <Tag variant="danger" onClose={() => {}}>Danger</Tag>
    </div>
  ),
};
