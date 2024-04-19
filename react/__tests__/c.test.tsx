import { render, screen } from "@testing-library/react";

import C1 from "@/app/results/c/page";

describe("test case C", () => {
    beforeEach(() => {
        render(<C1 />);
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
