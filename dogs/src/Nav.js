import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ names }) => {
	return (
		<nav className="Nav">
			{names.map((name) => (
				<Link key={name} to={`/dogs/${name}`}>
					{name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
