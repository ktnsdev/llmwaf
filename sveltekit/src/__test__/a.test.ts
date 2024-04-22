import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/svelte";

import A from "../routes/results/a/+page.svelte";

describe("test case A", () => {
    beforeEach(() => {
        render(A);
    });

    it("should render a heading", () => {
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    it("should render a heading with text 'Hello'", () => {
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello");
    });

    it("should render a paragraph", () => {
        expect(document.getElementsByTagName("p")[0]).toBeInTheDocument();
    });

    it("should render a paragraph that starts with lorem ipsum", () => {
        expect(document.getElementsByTagName("p")[0]).toHaveTextContent(/^Lorem ipsum/);
    });
});
