import React from "react";

const Project = (props) => {
	return (
		<div className="project-selector">
			<h2 className="project-name">{props.selected.title}</h2>
			<p className="project-description">{props.selected.description}</p>

			<div className="project-preview">
				<img
					src={"/images/projects/" + props.selected.file_name}
					alt={props.selected.name}
				/>
			</div>

			{props.selected.technologies && (
				<div className="technology-wrapper">
					<h3>Technology Stack:</h3>
					<div className="wrapper">
						{props.selected.technologies.map((t, i) => (
							<p key={i}>{t}</p>
						))}
					</div>
				</div>
			)}

			<div className="links-wrapper">
				<h3>Links:</h3>

				{props.selected.live_instance &&
					props.selected.live_instance !== "" && (
						<div className="wrapper">
							<p>
								Live Demo<span>View the live demo of the app</span>
							</p>
							<a href={props.selected.live_instance} target="_blank">
								View Demo
							</a>
						</div>
					)}

				{props.selected.github && props.selected.github !== "" && (
					<div className="wrapper">
						<p>
							GitHub Repository<span>View the code repository on GitHub</span>
						</p>
						<a href={props.selected.github} target="_blank">
							View Repository
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Project;
