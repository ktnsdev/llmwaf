import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/svelte";

import C from "../routes/results/c/+page.svelte";

describe("test case C", () => {
    beforeEach(() => {
        render(C);
    });

    it("should render an a tag", () => {
        expect(screen.getByRole("link")).toBeInTheDocument();
    });

    it("should render an a tag with text 'Privacy notice'", () => {
        expect(screen.getByRole("link")).toHaveTextContent("Privacy notice");
    });

    it("should render an a tag with href to '/privacy'", () => {
        expect(screen.getByRole("link")).toHaveAttribute("href", "/privacy");
    });
});
