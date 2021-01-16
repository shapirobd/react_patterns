import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("App smoke test", () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
});

test("/colors route", () => {
	const { getByText } = render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	expect(getByText("Welcome to the color factory.")).toBeInTheDocument();
	expect(getByText("Add a color")).toBeInTheDocument();
	expect(getByText("Please select a color.")).toBeInTheDocument();
});

test("/colors/:color route", () => {
	const { getByText, queryByText, getByRole } = render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	expect(getByText("red")).toBeInTheDocument();
	expect(queryByText("Go Back")).toBe(null);
	const redLink = getByRole("link", { name: /red/i });
	fireEvent.click(redLink);
	expect(queryByText("red")).toBe(null);
	expect(getByText("Go Back")).toBeInTheDocument();
});

test("/colors/new route renders form", () => {
	const { getByText, getByPlaceholderText, getByRole } = render(
		<MemoryRouter initialEntries={["/colors/new"]}>
			<App />
		</MemoryRouter>
	);
	expect(getByText("Color Name")).toBeInTheDocument();
	expect(getByPlaceholderText("Enter color name")).toBeInTheDocument();
	expect(getByRole("button", { name: /Add Color/i })).toBeInTheDocument();
});

test("NewColorForm adds new color to color index", () => {
	const { getByText, getByPlaceholderText, getByRole } = render(
		<MemoryRouter initialEntries={["/colors/new"]}>
			<App />
		</MemoryRouter>
	);
	const textInput = getByPlaceholderText("Enter color name");
	const submitBtn = getByRole("button", { name: /Add Color/i });
	fireEvent.change(textInput, { target: { value: "black" } });
	fireEvent.click(submitBtn);
	expect(getByText("black")).toBeInTheDocument();
});
