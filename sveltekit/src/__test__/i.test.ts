import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/svelte";

import I from "../routes/results/i/+page.svelte";
import userEvent from "@testing-library/user-event";

describe("test case I", () => {
    beforeEach(() => {
        render(I);
    });

    it("should render a checkbox", () => {
        const checkbox = screen.queryByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
    });

    it('should render a label with the text "I accept the terms of use"', () => {
        const label = screen.queryByLabelText("I accept the terms of use");
        expect(label).toBeInTheDocument();
    });

    it("should disable the checkbox when the terms of use is not scrolled to bottom", () => {
        const checkbox = screen.queryByRole("checkbox");
        expect(checkbox).toBeDisabled();
    });

    it("should enable the checkbox when the terms of use is scrolled to bottom", async () => {
        const checkbox = screen.queryByRole("checkbox");
        const container = document.querySelector("#container");
        const termsOfUse = container?.querySelectorAll("div")[0];

        expect(termsOfUse).toBeInTheDocument();

        await fireEvent.scroll(termsOfUse!, { target: { scrollY: 999999 } });
        expect(checkbox).toBeEnabled();
    });

    it("should render a button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('should render a button with the text "Continue"', () => {
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Continue");
    });

    it("should disable the button when the checkbox is not checked", () => {
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    });

    it("should enable the button when the terms of use is scrolled to bottom", async () => {
        const button = screen.getByRole("button");
        const container = document.querySelector("#container");
        const termsOfUse = container?.querySelectorAll("div")[0];

        expect(termsOfUse).toBeInTheDocument();

        await fireEvent.scroll(termsOfUse!, { target: { scrollY: 999999 } });
        expect(button).toBeEnabled();
    });

    it("should show error message when clicking the button and the checkbox is not checked", async () => {
        const checkbox = screen.getByRole("checkbox");
        const button = screen.getByRole("button");
        const container = document.querySelector("#container");
        const termsOfUse = container?.querySelectorAll("div")[0];

        expect(termsOfUse).toBeInTheDocument();

        await fireEvent.scroll(termsOfUse!, { target: { scrollY: 999999 } });
        await userEvent.click(button);

        const error = screen.getByText("You have not accepted the terms of use");
        expect(error).toBeInTheDocument();
    });

    it("should not show error message when clicking the button and the checkbox is checked", async () => {
        const checkbox = screen.getByRole("checkbox");
        const button = screen.getByRole("button");
        const container = document.querySelector("#container");
        const termsOfUse = container?.querySelectorAll("div")[0];
        window.alert = jest.fn();

        expect(termsOfUse).toBeInTheDocument();

        await fireEvent.scroll(termsOfUse!, { target: { scrollY: 999999 } });
        await userEvent.click(checkbox);
        await userEvent.click(button);

        expect(window.alert).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledWith("Success!");
    });
});
