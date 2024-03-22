import React from "react";

import NavigationItems from "./navigationItems";

const SideDrawer = (props) => {
	return (
		<div id="modal">
			<div className="sidebar-wrapper">
				<NavigationItems />
			</div>
		</div>
	);
};

export default SideDrawer;
