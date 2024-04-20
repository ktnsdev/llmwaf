import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/svelte";

import K from "../routes/results/k/+page.svelte";

describe("test case K", () => {
    beforeEach(() => {
        render(K);
    });

    it("should not affect the heading", () => {
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toHaveTextContent("Travel destinations");
    });

    it("should render a card", () => {
        const divs = document.getElementsByTagName("div");
        expect(divs.length).toBeGreaterThanOrEqual(1);
    });
});
