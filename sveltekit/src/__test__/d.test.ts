import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/svelte";

import D from "../routes/results/d/+page.svelte";

describe("test case D", () => {
    beforeEach(() => {
        render(D);
    });

    it("should not affect the heading's text", () => {
        expect(screen.getByText("Current path")).toBeInTheDocument();
    });
});
