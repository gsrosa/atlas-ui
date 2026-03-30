import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import { Separator } from "./separator";

describe("Separator", () => {
  it("renders horizontal separator by default", () => {
    render(<Separator />);
    expect(screen.getByRole("none")).toBeInTheDocument();
  });

  it("renders vertical separator", () => {
    render(<Separator orientation="vertical" />);
    const separator = screen.getByRole("none");
    expect(separator.className).toContain("h-full");
    expect(separator.className).toContain("w-px");
  });

  it("renders horizontal separator with correct classes", () => {
    render(<Separator orientation="horizontal" />);
    const separator = screen.getByRole("none");
    expect(separator.className).toContain("h-px");
    expect(separator.className).toContain("w-full");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Separator />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
