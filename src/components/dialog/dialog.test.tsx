import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const DialogExample = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button>Open</button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>Dialog description.</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

describe("Dialog", () => {
  it("does not show content initially", () => {
    render(<DialogExample />);
    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
  });

  it("shows content when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<DialogExample />);

    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByText("Dialog Title")).toBeInTheDocument();
    expect(screen.getByText("Dialog description.")).toBeInTheDocument();
  });

  it("has dialog role when open", async () => {
    const user = userEvent.setup();
    render(<DialogExample />);

    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes when close button is clicked", async () => {
    const user = userEvent.setup();
    render(<DialogExample />);

    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("has no accessibility violations when open", async () => {
    const user = userEvent.setup();
    const { container } = render(<DialogExample />);

    await user.click(screen.getByRole("button", { name: "Open" }));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
