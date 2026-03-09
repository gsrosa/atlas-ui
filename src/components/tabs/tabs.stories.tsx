import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" style={{ width: "400px" }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p style={{ fontSize: "14px", padding: "16px 0" }}>
          Make changes to your account here. Click save when you are done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p style={{ fontSize: "14px", padding: "16px 0" }}>
          Change your password here. After saving, you will be logged out.
        </p>
      </TabsContent>
      <TabsContent value="settings">
        <p style={{ fontSize: "14px", padding: "16px 0" }}>
          Manage your application settings and preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: "300px" }}>
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p style={{ fontSize: "14px", padding: "16px 0" }}>Overview content.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p style={{ fontSize: "14px", padding: "16px 0" }}>Analytics content.</p>
      </TabsContent>
    </Tabs>
  ),
};
