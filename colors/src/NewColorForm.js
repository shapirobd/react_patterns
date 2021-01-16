import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({ setColors }) => {
	const [colorName, setColorName] = useState("");
	const [colorValue, setColorValue] = useState("#000000");
	const history = useHistory();

	const handleNameChange = (e) => {
		const { value } = e.target;
		setColorName((colorName) => value);
	};
	const handleValueChange = (e) => {
		const { value } = e.target;
		setColorValue((colorValue) => value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setColors((colors) => ({ ...colors, [colorName]: colorValue }));
		setColorName("");
		history.push("/colors");
	};

	return (
		<form className="NewColorForm" onSubmit={handleSubmit}>
			<label htmlFor="color">Color Name</label>
			<input
				type="text"
				id="colorName"
				name="colorName"
				value={colorName}
				onChange={handleNameChange}
			/>
			<input
				type="color"
				id="colorValue"
				name="colorValue"
				value={colorValue}
				onChange={handleValueChange}
			/>
			<button type="submit">Add Color</button>
		</form>
	);
};

export default NewColorForm;
