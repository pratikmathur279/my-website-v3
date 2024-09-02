import React from "react";

import Experience from "./experience.js";

const WorkExperience = (props) => {
	const buildColumns = (col, i) => {
		return (
			<div className="tech-col" key={i} id={"tech-col-" + i}>
				{col}
			</div>
		);
	};

	const buildExperiences = (exp) => {
		return (
			<div key={exp.id} className="content">
				<Experience data={exp} />
			</div>
		);
	};

	return (
		<React.Fragment>
			<div className="Section">
				<div className="header">
					<h2>Technologies</h2>
				</div>

				<div className="content-row TechnologyRow">
					{props.technology.map(buildColumns)}
				</div>
			</div>

			<div className="Section">
				<div className="header">
					<h2>Work Experience</h2>
				</div>

				<div className="content-row">
					{props.experience.map(buildExperiences)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default WorkExperience;
