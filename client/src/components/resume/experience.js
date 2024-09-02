import React from "react";

const Experience = (props) => {
	const client = props.data.client;
	const buildRow = (responsibility) => <li>{responsibility}</li>;

	return (
		<React.Fragment>
			<h3>{props.data.position}</h3>
			<div className="container">
				<h4>
					{props.data.name},{" "}
					<span>
						{props.data.from} - {props.data.to}
					</span>
				</h4>
			</div>

			{client && client != "" && <h4>Client: {client}</h4>}

			<ul className="responsibilities">
				{props.data.responsibilities.map(buildRow)}
			</ul>
		</React.Fragment>
	);
};

export default Experience;
