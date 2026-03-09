import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, expect, it, vi } from "vitest";

import { Tag } from "./tag";

describe("Tag", () => {
  it("renders with text content", () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Tag variant="danger">Error</Tag>);
    expect(screen.getByText("Error").className).toContain("danger");
  });

  it("renders close button when onClose is provided", () => {
    render(<Tag onClose={() => {}}>Closable</Tag>);
    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });

  it("does not render close button without onClose", () => {
    render(<Tag>Static</Tag>);
    expect(screen.queryByRole("button", { name: "Remove" })).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Tag onClose={handleClose}>Closable</Tag>);

    await user.click(screen.getByRole("button", { name: "Remove" }));
    expect(handleClose).toHaveBeenCalledOnce();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Tag>Accessible</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no accessibility violations with close button", async () => {
    const { container } = render(<Tag onClose={() => {}}>Closable</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
