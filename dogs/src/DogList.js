import React from "react";
import App from "./App";
import DogDetails from "./DogDetails";
import { useParams } from "react-router-dom";

const DogList = () => {
	let { dogs } = App.defaultProps;
	const params = useParams();
	// BONUS: if DogList was rendered from the '/dogs/:name' pattern, make it so we pass DogDetails just the info from that one dog as opposed to the info of all dogs
	if (params.name) {
		dogs = App.defaultProps.dogs.filter((dog) => {
			return dog["name"] === params.name;
		});
	}
	return (
		<div className="DogList">
			{dogs.map((dog) => {
				return <DogDetails dog={dog} key={dog.name} />;
			})}
		</div>
	);
};

export default DogList;
