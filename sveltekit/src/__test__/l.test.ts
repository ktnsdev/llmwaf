import "@testing-library/jest-dom";

import { render, screen, waitFor } from "@testing-library/svelte";

import L from "../routes/results/l/+page.svelte";

describe("test case L", () => {
    beforeEach(() => {
        render(L);
    });

    it("should render complete text after the fetch is complete", async () => {
        await waitFor(
            () => {
                const complete = screen.getByText("API fetch complete");
                expect(complete).toBeInTheDocument();
            },
            {
                timeout: 2100,
            }
        );
    });
});
