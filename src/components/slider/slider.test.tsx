import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import { Slider } from "./slider";

describe("Slider", () => {
  it("renders a slider", () => {
    render(<Slider defaultValue={[50]} max={100} aria-label="Volume" />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("has correct aria attributes", () => {
    render(<Slider defaultValue={[50]} max={100} step={1} aria-label="Volume" />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "50");
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "100");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Slider defaultValue={[50]} max={100} aria-label="Volume" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
