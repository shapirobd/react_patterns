import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DogList from "./DogList";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/dogs">
				<DogList />
			</Route>
			<Route path="/dogs/:name">
				<DogList />
			</Route>
			<Redirect to="/dogs" />
		</Switch>
	);
};

export default Routes;
