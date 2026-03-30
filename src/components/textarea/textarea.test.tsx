import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders a textarea", () => {
    render(<Textarea aria-label="Message" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("accepts typed text", async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="Message" />);

    await user.type(screen.getByRole("textbox"), "Hello world");
    expect(screen.getByRole("textbox")).toHaveValue("Hello world");
  });

  it("is disabled when disabled prop is set", () => {
    render(<Textarea aria-label="Message" disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders placeholder", () => {
    render(<Textarea placeholder="Type here..." aria-label="Message" />);
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <label>
        Message
        <Textarea />
      </label>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
