import { render, screen } from "@testing-library/react";

import F1 from "@/app/results/f1/page";
import userEvent from "@testing-library/user-event";

describe("test case F1", () => {
    beforeEach(() => {
        render(<F1 />);
        window.alert = jest.fn();
    });

    it("should have a button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("should show alert when button is clicked", async () => {
        const button = screen.getByRole("button");
        const alertSpy = jest.spyOn(window, "alert");

        await userEvent.click(button);

        expect(alertSpy).toHaveBeenCalledTimes(1);
        expect(alertSpy).toHaveBeenCalledWith("You've got an email");
    });
});
