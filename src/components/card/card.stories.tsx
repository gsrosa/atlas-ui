import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const meta = {
  title: "Data Display/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: "380px" }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: "14px" }}>Card content body.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card style={{ width: "380px" }}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ display: "grid", gap: "0.25rem" }}>
            <Label htmlFor="projectName">Name</Label>
            <Input id="projectName" placeholder="My Project" />
          </div>
          <div style={{ display: "grid", gap: "0.25rem" }}>
            <Label htmlFor="framework">Framework</Label>
            <Input id="framework" placeholder="Next.js" />
          </div>
        </div>
      </CardContent>
      <CardFooter style={{ justifyContent: "space-between" }}>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card style={{ width: "300px" }}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: "14px", color: "#8e8e8e" }}>You have 3 unread messages.</p>
      </CardContent>
    </Card>
  ),
};
