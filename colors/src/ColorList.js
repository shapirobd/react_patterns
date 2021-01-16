import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {
	const items = [];
	for (let color in colors) {
		items.push(
			<Link
				to={`/colors/${color}`}
				className="ColorList-color"
				style={{ color: `${colors[color]}` }}
				key={color}
			>
				{color}
			</Link>
		);
	}
	return (
		<div className="ColorList">
			<div className="ColorList-welcome">
				<h2>Welcome to the color factory.</h2>
				<Link to="/colors/new">
					<h1>Add a color</h1>
				</Link>
			</div>
			<p>Please select a color.</p>
			{items}
		</div>
	);
};

export default ColorList;
