import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import { Input } from "./input";

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input aria-label="test input" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("accepts and displays typed text", async () => {
    const user = userEvent.setup();
    render(<Input aria-label="test input" />);

    const input = screen.getByRole("textbox");
    await user.type(input, "hello");
    expect(input).toHaveValue("hello");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Input inputSize="sm" aria-label="input" />);
    expect(screen.getByRole("textbox").className).toContain("h-8");

    rerender(<Input inputSize="md" aria-label="input" />);
    expect(screen.getByRole("textbox").className).toContain("h-10");

    rerender(<Input inputSize="lg" aria-label="input" />);
    expect(screen.getByRole("textbox").className).toContain("h-12");
  });

  it("is disabled when disabled prop is set", () => {
    render(<Input disabled aria-label="input" />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text..." aria-label="input" />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    render(<Input ref={ref} aria-label="input" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <label>
        Email
        <Input type="email" />
      </label>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
