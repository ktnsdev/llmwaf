import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/svelte";

import B from "../routes/results/b/+page.svelte";

describe("test case B", () => {
    beforeEach(() => {
        render(B);
    });

    it("should not remove heading", () => {
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    it("should not affect heading text: morning", () => {
        jest.useFakeTimers().setSystemTime(new Date("2024-01-01T09:00:00Z"));

        render(B);

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(`Good morning`);
    });

    it("should not affect heading text: afternoon", () => {
        jest.useFakeTimers().setSystemTime(new Date("2024-01-01T16:00:00Z"));

        render(B);

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(`Good afternoon`);
    });

    it("should not remove paragraph", () => {
        expect(screen.getByRole("paragraph")).toBeInTheDocument();
    });

    it("should not affect paragraph text", () => {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();

        expect(screen.getByRole("paragraph")).toHaveTextContent(
            `${hours}:${String(minutes).padStart(2, "0")}`
        );
    });
});
