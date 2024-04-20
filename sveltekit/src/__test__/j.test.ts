import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/svelte";

import J from "../routes/results/j/+page.svelte";

describe("test case J", () => {
    beforeEach(() => {
        render(J);
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
