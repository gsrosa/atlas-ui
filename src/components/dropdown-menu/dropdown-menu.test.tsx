import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const DropdownExample = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button>Open menu</button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

describe("DropdownMenu", () => {
  it("does not show content initially", () => {
    render(<DropdownExample />);
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
  });

  it("shows menu items when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<DropdownExample />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("menuitem", { name: "Edit" })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "Delete" })).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<DropdownExample />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
