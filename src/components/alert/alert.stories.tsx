import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger"],
      description: "The visual style of the alert",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Alert variant="default" style={{ width: "420px" }}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success" style={{ width: "420px" }}>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" style={{ width: "420px" }}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your trial is expiring in 3 days. Please upgrade your plan.
      </AlertDescription>
    </Alert>
  ),
};

export const Danger: Story = {
  render: () => (
    <Alert variant="danger" style={{ width: "420px" }}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again later.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "420px" }}>
      <Alert variant="default">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Informational message.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Action may be required.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    </div>
  ),
};
