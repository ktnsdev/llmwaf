import { render, screen } from "@testing-library/react";

import J from "@/app/results/j/page";

describe("test case J", () => {
    beforeEach(() => {
        render(<J />);
    });

    it("should render a button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("should not affect button text", () => {
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Hover me");
    });
});
