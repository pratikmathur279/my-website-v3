import React from "react";
import { Link } from "react-router-dom";

import { IoOpenOutline } from "react-icons/io5";

const ProjectCard = (props) => {
	console.log(props);

	return (
		<div
			className={"project-card"}
			to={`/projects/${props.project.slug}`}
			key={props.key}
		>
			<div className="preview-box">
				<img
					src={
						"https://pratikmathur-website.s3.amazonaws.com/projects/" +
						props.project.file_name
					}
					alt={props.project.name}
				/>
			</div>

			<div className="card-content">
				<h3 className="project-name">{props.project.title}</h3>

				<p>{props.project.page_description}</p>

				{props?.project?.technologies && (
					<div className="technology-wrapper">
						{props.project.technologies.map((t, i) => (
							<p key={i}>{t}</p>
						))}
					</div>
				)}

				<Link className={"btn primary"} to={`/projects/${props.project.slug}`}>
					<IoOpenOutline />
					<span>View Project</span>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
