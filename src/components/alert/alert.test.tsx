import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { describe, expect, it } from "vitest";

import { Alert, AlertDescription, AlertTitle } from "./alert";

describe("Alert", () => {
  it("renders with role=alert", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders title and description", () => {
    render(
      <Alert>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Something happened.</AlertDescription>
      </Alert>,
    );
    expect(screen.getByText("Warning")).toBeInTheDocument();
    expect(screen.getByText("Something happened.")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    const { rerender } = render(<Alert variant="danger">Error</Alert>);
    expect(screen.getByRole("alert").className).toContain("danger");

    rerender(<Alert variant="success">OK</Alert>);
    expect(screen.getByRole("alert").className).toContain("success");

    rerender(<Alert variant="warning">Warn</Alert>);
    expect(screen.getByRole("alert").className).toContain("warning");
  });

  it("has no accessibility violations (info)", async () => {
    const { container } = render(
      <Alert variant="default">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Message.</AlertDescription>
      </Alert>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no accessibility violations (danger)", async () => {
    const { container } = render(
      <Alert variant="danger">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed.</AlertDescription>
      </Alert>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
