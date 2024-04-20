import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/svelte";

import H from "../routes/results/h/+page.svelte";

describe("test case H", () => {
    beforeEach(() => {
        render(H);
    });

    it("should still have 15 sections", () => {
        const sections = document.querySelectorAll("section");
        expect(sections.length).toBe(15);
    });

    it("should be scrollable", async () => {
        await fireEvent.scroll(window, { target: { scrollY: 999999 } });
    });
});
