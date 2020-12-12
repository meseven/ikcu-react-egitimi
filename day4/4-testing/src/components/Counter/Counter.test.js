import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter Tests", () => {
	let increaseBtn, decreaseBtn, count;

	beforeEach(() => {
		render(<Counter />);
		increaseBtn = screen.getByText("Increase");
		decreaseBtn = screen.getByText("Decrease");
		count = screen.getByText("0");
	});

	it("increase btn", () => {
		userEvent.click(increaseBtn);
		expect(count).toHaveTextContent("1");
	});

	it("decrease btn", () => {
		userEvent.click(decreaseBtn);
		expect(count).toHaveTextContent("-1");
	});
});
