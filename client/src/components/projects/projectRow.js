import React from "react";
import Project from "./project";
import { Link } from "react-router-dom";

const ProjectRow = (props) => {
	const buildRow = (project, index) => {
		let isSelected = project.id === props.selected.id;
		let className = isSelected ? "project-preview active" : "project-preview";

		return (
			<Link
				className={className}
				key={index}
				// onClick={() => props.selectProject(project)}
				to={`/projects/${project.slug}`}
			>
				<h3 className="project-name">{project.title}</h3>
				<div className="preview-box">
					<img
						src={
							"https://pratikmathur-website.s3.amazonaws.com/projects/" +
							project.file_name
						}
						alt={project.name}
					/>
				</div>
			</Link>
		);
	};

	const hasSelected = () => {
		if ("id" in props.selected) {
			let isExist = _.find(props.projects, (p) => {
				return p.id === props.selected.id;
			});
			if (isExist) return true;
		}
		return false;
	};

	return (
		<div className="projects-row">
			{props.projects.map(buildRow)}

			{hasSelected() && (
				<Project
					selected={props.selected}
					selectProject={props.selectProject}
				/>
			)}
		</div>
	);
};

export default ProjectRow;
