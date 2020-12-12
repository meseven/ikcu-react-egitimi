import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./Todo";

describe("Todo Tests", () => {
	let button, input;

	beforeEach(() => {
		render(<Todo />);

		button = screen.getByText("add");
		input = screen.getByLabelText("Name");
	});

	it("Varsayılan olarak verilen 3 obje, input ve button render edilmeli.", () => {
		const items = screen.getAllByText(/Item/i);

		expect(items.length).toEqual(3);
		expect(button).toBeInTheDocument();
		expect(input).toBeInTheDocument();
	});

	it("Kullanıcı inputa bir şeyler yazıp butona bastıktan sonra listeye eklenmeli", () => {
		// inputu doldur
		const name = "Mehmet";
		userEvent.type(input, name);

		// butona tıkla
		userEvent.click(button);

		// assertion
		expect(screen.getByText(name)).toBeInTheDocument();
	});
});
