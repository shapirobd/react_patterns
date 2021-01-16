import React from "react";

const DogDetails = ({ dog }) => {
	const { name, age, src, facts } = dog;
	return (
		<div className="DogDetails">
			<h1>{name}</h1>
			<img src={src} key={name} />
			<h2>Age: {age}</h2>
			<p>About {name}</p>
			<ul>
				{facts.map((fact, idx) => {
					return <li key={idx}>{fact}</li>;
				})}
			</ul>
		</div>
	);
};

export default DogDetails;
