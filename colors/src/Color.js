import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Color.css";

const Color = ({ colors }) => {
	const { color } = useParams();
	return (
		<div className="Color" style={{ backgroundColor: `${colors[color]}` }}>
			<Link to="/colors">Go Back</Link>
		</div>
	);
};

export default Color;
