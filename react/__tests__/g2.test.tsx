import { render, screen } from "@testing-library/react";

import G2 from "@/app/results/g2/page";
import userEvent from "@testing-library/user-event";

describe("test case G2", () => {
    beforeEach(() => {
        render(<G2 />);
    });

    it("should have a text input", () => {
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });

    it("should accept numberic characters", async () => {
        const input = screen.getByRole("textbox");

        await userEvent.type(input, "1234567890");

        expect(input).toHaveValue("1234567890");
    });

    it("should not accept non-numeric characters", async () => {
        const input = screen.getByRole("textbox");

        await userEvent.type(input, "abc");

        expect(input).not.toHaveValue();
    });

    it("should accept only numeric characters", async () => {
        const input = screen.getByRole("textbox");

        await userEvent.type(input, "abc123def456");

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
