import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

const Routes = () => {
	const [colors, setColors] = useState({
		red: "#FF0000",
		green: "#00FF00",
		blue: "#0000FF",
	});
	return (
		<Switch>
			<Route exact path="/colors">
				<ColorList colors={colors} />
			</Route>
			<Route path="/colors/new">
				<NewColorForm setColors={setColors} />
			</Route>
			<Route path="/colors/:color">
				<Color colors={colors} />
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
};

export default Routes;
