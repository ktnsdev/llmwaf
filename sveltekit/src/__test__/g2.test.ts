import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/svelte";

import G from "../routes/results/g2/+page.svelte";
import userEvent from "@testing-library/user-event";

describe("test case G2", () => {
    beforeEach(() => {
        render(G);
    });

    it("should have a text input", () => {
        const input = screen.queryByRole("textbox") || screen.queryByRole("spinbutton");
        expect(input).toBeInTheDocument();
    });

    it("should accept numberic characters", async () => {
        const input = screen.queryByRole("textbox") || screen.queryByRole("spinbutton");

        expect(input).toBeInTheDocument();

        await userEvent.type(input!, "1234567890");

        expect(input).toHaveValue("1234567890");
    });

    it("should not accept non-numeric characters", async () => {
        const input = screen.queryByRole("textbox") || screen.queryByRole("spinbutton");

        expect(input).toBeInTheDocument();

        await userEvent.type(input!, "abc");

        expect(input).not.toHaveValue();
    });

    it("should accept only numeric characters", async () => {
        const input = screen.queryByRole("textbox") || screen.queryByRole("spinbutton");

        expect(input).toBeInTheDocument();

        await userEvent.type(input!, "abc123def456");

        expect(input).toHaveValue("123456");
    });

    it("should have a button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('should have the text "Submit" on the button', () => {
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Submit");
    });
});
