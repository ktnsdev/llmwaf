import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import A1 from "@/app/results/a/page";

describe("test case A", () => {
    beforeEach(() => {
        render(<A1 />);
    });

    it("should render a heading", () => {
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    it("should render a heading with text 'Hello'", () => {
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello");
    });

    it("should render a paragraph", () => {
        expect(screen.getByRole("paragraph")).toBeInTheDocument();
    });

    it("should render a paragraph that starts with lorem ipsum", () => {
        expect(screen.getByRole("paragraph")).toHaveTextContent(/^Lorem ipsum/);
    });
});
