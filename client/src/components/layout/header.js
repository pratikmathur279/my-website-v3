import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import NavigationItems from "./navigationItems";

import { FaPhoneAlt } from "react-icons/fa";

const Header = (props) => {
	const [navScrolled, setNavScrolled] = useState("");

	useEffect(() => {
		window.addEventListener(
			"scroll",
			() => {
				const scrolled = window.scrollY < 20 ? "" : "scrolled";
				setNavScrolled(scrolled);
			},
			true
		);
	}, []);

	return (
		<div className={"header-wrapper " + navScrolled}>
			<div className="wrapper">
				<div className="logo-wrapper">
					<Link to="/" className="my-logo">
						<img alt="Pratik Mathur Logo" src="/images/logos/pm_logo.png" />
					</Link>
				</div>
				<nav className="DesktopOnly">
					<NavigationItems />
				</nav>
			</div>
		</div>
	);
};

export default Header;
