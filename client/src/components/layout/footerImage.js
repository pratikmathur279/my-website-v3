import React from "react";
import ReactIcons from "../common/reactIcons";

const FooterImage = (props) => {
	return (
		<div className="footerImage">
			<a href={props.url} target={props.target}>
				<ReactIcons
					id="CustomTag"
					size={props.size}
					color={props.color}
					icon={props.icon}
					background="#fff"
				/>
			</a>
		</div>
	);
};

export default FooterImage;
