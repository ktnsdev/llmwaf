import { fireEvent, render } from "@testing-library/react";

import H from "@/app/results/h/page";

describe("test case H", () => {
    beforeEach(() => {
        render(<H />);
    });

    it("should still have 15 sections", () => {
        const sections = document.querySelectorAll("section");
        expect(sections.length).toBe(15);
    });

    it("should be scrollable", async () => {
        await fireEvent.scroll(window, { target: { scrollY: 999999 } });
    });
});
