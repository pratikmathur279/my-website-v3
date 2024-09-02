import React from "react";

import NavigationItem from "./navigationItem.js";
import { Link } from "react-router-dom";

const NavigationItems = (props) => {
	return (
		<ul className="NavigationItems">
			<NavigationItem to="/">Portfolio</NavigationItem>
			<NavigationItem to="/about">About</NavigationItem>
			<NavigationItem to="/experience">Experience</NavigationItem>
			<NavigationItem to="/projects">Projects</NavigationItem>
			<NavigationItem to="/blog">Blog</NavigationItem>
			<NavigationItem to="/contact">Contact</NavigationItem>
		</ul>
	);
};

export default NavigationItems;
