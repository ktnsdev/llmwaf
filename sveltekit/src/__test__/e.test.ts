import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/svelte";

import E from "../routes/results/e/+page.svelte";
import userEvent from "@testing-library/user-event";

describe("test case E", () => {
    beforeEach(() => {
        render(E);
    });

    it("should have a circle div on first render", () => {
        const container = document.getElementById("container");
        const divs = container?.getElementsByTagName("div");

        expect(divs?.length).toBe(1);

        const circle = divs?.[0];
        expect(circle).toBeInTheDocument();
    });

    it("should hide the circle div when the button is clicked", async () => {
        const button = screen.getByRole("button");
        await userEvent.click(button);

        const container = document.getElementById("container");
        const divs = container?.getElementsByTagName("div");

        expect(divs?.length).toBe(0);
    });

    it("should show the circle div when the button is clicked again", async () => {
        const button = screen.getByRole("button");

        await userEvent.click(button);
        await userEvent.click(button);

        let container = document.getElementById("container");
        let divs = container?.getElementsByTagName("div");

        expect(divs?.length).toBe(1);

        const circle = divs?.[0];
        expect(circle).toBeInTheDocument();
    });

    it("should show the circle div when the button is clicked 3 times", async () => {
        const button = screen.getByRole("button");

        await userEvent.click(button);
        await userEvent.click(button);
        await userEvent.click(button);

        let container = document.getElementById("container");
        let divs = container?.getElementsByTagName("div");

        expect(divs?.length).toBe(0);
    });
});
