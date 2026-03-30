import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const PopoverExample = () => (
  <Popover>
    <PopoverTrigger asChild>
      <button>Open popover</button>
    </PopoverTrigger>
    <PopoverContent>Popover content</PopoverContent>
  </Popover>
);

describe("Popover", () => {
  it("does not show content initially", () => {
    render(<PopoverExample />);
    expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
  });

  it("shows content when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<PopoverExample />);

    await user.click(screen.getByRole("button", { name: "Open popover" }));
    expect(screen.getByText("Popover content")).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<PopoverExample />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
