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

test("/dogs route", () => {
	const { getByText } = render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	expect(getByText("About Whiskey:")).toBeInTheDocument();
	expect(getByText("About Duke:")).toBeInTheDocument();
	expect(getByText("About Perry:")).toBeInTheDocument();
	expect(getByText("About Tubby:")).toBeInTheDocument();
});

test("/dogs/:name route", () => {
	const { getByText, queryByText, getByRole } = render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	const whiskeyLink = getByRole("link", { name: /Whiskey/i });
	fireEvent.click(whiskeyLink);
	expect(getByText("About Whiskey:")).toBeInTheDocument();
	expect(queryByText("About Duke:")).toBe(null);
	expect(queryByText("About Perry:")).toBe(null);
	expect(queryByText("About Tubby:")).toBe(null);
});
