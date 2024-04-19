import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/angular";

import { AComponent } from "../app/results/a/a.component";

describe("test case A", () => {
  beforeEach(async () => {
    await render(AComponent);
  });

  it("should render a heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should render a heading with text 'Hello'", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello"
    );
  });

  it("should render a paragraph", () => {
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });

  it("should render a paragraph that starts with lorem ipsum", () => {
    expect(screen.getByRole("paragraph")).toHaveTextContent(/^Lorem ipsum/);
  });
});
