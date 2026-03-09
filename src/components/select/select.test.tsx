import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const SelectExample = () => (
  <Select>
    <SelectTrigger aria-label="Fruit">
      <SelectValue placeholder="Pick a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectContent>
  </Select>
);

describe("Select", () => {
  it("renders the trigger", () => {
    render(<SelectExample />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("shows placeholder text", () => {
    render(<SelectExample />);
    expect(screen.getByText("Pick a fruit")).toBeInTheDocument();
  });

  it("has accessible label", () => {
    render(<SelectExample />);
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-label", "Fruit");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<SelectExample />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
