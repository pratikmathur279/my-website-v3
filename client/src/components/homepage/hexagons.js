import React from "react";

import ReactIcons from "../common/reactIcons.js";

const Hexagons = (props) => {
	const buildList = (hex) => {
		console.log(hex.name);
		return (
			<div key={hex.id} className="AlignHexagon">
				<div className="Hexagon">
					<div className="Icons">
						<ReactIcons key={hex.id} icon={hex.name} size={60} />
					</div>
				</div>
				<h3>{hex.title}</h3>
				<p>{hex.desc}</p>
			</div>
		);
	};
	return (
		<div className="HexagonsContainer">
			<div className="hexagons-wrapper">{props.hexagons.map(buildList)}</div>
		</div>
	);
};

export default Hexagons;
