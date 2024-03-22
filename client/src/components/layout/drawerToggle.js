import React from "react";

const DrawerToggle = (props) => (
	<div className="DrawerToggle">
		<div id="Burger" className="Burger" onClick={props.clicked}></div>
	</div>
);

export default DrawerToggle;
