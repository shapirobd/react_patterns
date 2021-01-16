import React from "react";
import "./DogDetails.css";

const DogDetails = ({ dog }) => {
	const { name, age, src, facts } = dog;
	return (
		<div className="DogDetails">
			<h1>{name}</h1>
			<img src={src} key={name} />
			<h2>Age: {age}</h2>
			<h3>About {name}:</h3>
			<ul>
				{facts.map((fact, idx) => {
					return <li key={idx}>{fact}</li>;
				})}
			</ul>
		</div>
	);
};

export default DogDetails;
