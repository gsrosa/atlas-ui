import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { Button } from "../button";

const meta = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top"><p>Top tooltip</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom"><p>Bottom tooltip</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left"><p>Left tooltip</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right"><p>Right tooltip</p></TooltipContent>
      </Tooltip>
    </div>
  ),
};
