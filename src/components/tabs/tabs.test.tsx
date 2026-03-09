import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const TabsExample = () => (
  <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Content 1</TabsContent>
    <TabsContent value="tab2">Content 2</TabsContent>
  </Tabs>
);

describe("Tabs", () => {
  it("renders tab triggers", () => {
    render(<TabsExample />);
    expect(screen.getByRole("tab", { name: "Tab 1" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();
  });

  it("shows first tab content by default", () => {
    render(<TabsExample />);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("switches tabs on click", async () => {
    const user = userEvent.setup();
    render(<TabsExample />);

    await user.click(screen.getByRole("tab", { name: "Tab 2" }));
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("marks active tab as selected", () => {
    render(<TabsExample />);
    expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveAttribute("data-state", "active");
    expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveAttribute("data-state", "inactive");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<TabsExample />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
