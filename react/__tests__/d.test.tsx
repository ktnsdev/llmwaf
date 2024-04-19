import { render, screen } from "@testing-library/react";

import D1 from "@/app/results/d/page";

describe("test case D", () => {
    beforeEach(() => {
        render(<D1 />);
    });

    it("should not affect the heading's text", () => {
        expect(screen.getByText("Current path")).toBeInTheDocument();
    });
});
