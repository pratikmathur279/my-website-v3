import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import Parser from "html-react-parser";
import Gallery from "../common/gallery";

const ProjectDetails = (props) => {
	const [project, setProject] = useState(null);
	const { slug } = useParams();
	const { projects } = useSelector((state) => state.GlobalReducer);

	useEffect(() => {
		let project = _.find(projects, (p) => {
			return p.slug === slug;
		});

		if (project) {
			setProject(project);
		}
	}, [slug, projects]);

	if (project) {
		return (
			<div className="project-details-wrapper">
				<div className="hero-wrapper">
					<div className="hero-container">
						<h1>{project.title}</h1>
						{project.subtitle && <h4>{project.subtitle}</h4>}

						{project.page_description && <p>{project.page_description}</p>}

						{project.live_instance && project.live_instance !== "" && (
							<a
								href={project.live_instance}
								target="_blank"
								className="btn primary"
							>
								Live Demo
							</a>
						)}
					</div>

					<div className="hero-mouse">
						<div className="mouse"></div>
					</div>
				</div>

				<div className="project-details-container">
					<figure>
						<img src={project.project_filename} alt={project.name} />
					</figure>

					<div className="content">
						<div className="container">
							<h3>Project Overview</h3>
							<div className="description">{Parser(project.description)}</div>
						</div>

						{project.gallery && project.gallery.length > 0 && (
							<Gallery photos={project.gallery} />
						)}

						{project.technologies && (
							<div className="technology-wrapper container">
								<h3>Technology</h3>
								<div className="wrapper">
									{project.technologies.map((t, i) => (
										<p key={i}>{t}</p>
									))}
								</div>
							</div>
						)}

						<div className="links-wrapper container">
							<h3>Links</h3>
							<div className="wrapper">
								{project.live_instance && project.live_instance !== "" && (
									<a
										href={project.live_instance}
										target="_blank"
										className="btn primary"
									>
										Live Demo
									</a>
								)}

								{project.github && project.github !== "" && (
									<a
										href={project.github}
										target="_blank"
										className="btn transparent"
									>
										View Source Code
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default ProjectDetails;
