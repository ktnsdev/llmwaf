import { render, screen } from "@testing-library/react";

import K from "@/app/results/k/page";

describe("test case K", () => {
    beforeEach(() => {
        render(<K />);
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
