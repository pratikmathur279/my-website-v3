import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import NavigationItems from "./navigationItems";

import { FaPhoneAlt } from "react-icons/fa";
import DrawerToggle from "./drawerToggle";
import SideDrawer from "./sidebar";

const Header = (props) => {
	const [navScrolled, setNavScrolled] = useState("");
	const [showSideDrawer, setShowSideDrawer] = useState(false);

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

	const sideDrawerToggleHandler = () => {
		setShowSideDrawer((prevState) => !prevState);
	};

	return (
		<div className={"header-wrapper " + navScrolled}>
			<div className="wrapper">
				<Link to="/" className="logo-wrapper">
					<img alt="Pratik Mathur Logo" src="/images/logos/pm_logo.png" />
				</Link>

				<nav className="DesktopOnly">
					<NavigationItems />
				</nav>

				{showSideDrawer && <SideDrawer closed={sideDrawerToggleHandler} />}

				<DrawerToggle
					clicked={sideDrawerToggleHandler}
					showSideDrawer={showSideDrawer}
				/>
			</div>
		</div>
	);
};

export default Header;
