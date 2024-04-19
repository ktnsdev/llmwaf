import { render, screen } from "@testing-library/react";

import G1 from "@/app/results/g1/page";
import userEvent from "@testing-library/user-event";

describe("test case G1", () => {
    beforeEach(() => {
        render(<G1 />);
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
});
