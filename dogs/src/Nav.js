import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ names }) => {
	return (
		<nav>
			{names.map((name) => (
				<Link key={name} to={`/dogs/${name}`}>
					{name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
