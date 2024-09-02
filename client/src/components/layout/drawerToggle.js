import React from "react";

const DrawerToggle = (props) => (
	<div className="DrawerToggle">
		<div
			id="Burger"
			className={`Burger ${props.showSideDrawer ? "active" : ""}`}
			onClick={props.clicked}
		/>
	</div>
);

export default DrawerToggle;
