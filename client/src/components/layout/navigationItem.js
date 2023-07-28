import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
	return (
		<li className="NavigationItem">
			<NavLink exact to={props.to} className="NavLink">
				{" "}
				{props.children}
			</NavLink>
		</li>
	);
};

export default NavigationItem;
