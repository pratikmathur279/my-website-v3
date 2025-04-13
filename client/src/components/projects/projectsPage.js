import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProjects } from "../../actions/website";
import ProjectCard from "./projectCard";

const ProjectsPage = (props) => {
	const dispatch = useDispatch();

	const { projects } = useSelector((state) => state.GlobalReducer);

	const allProjectsRef = React.useRef();

	useEffect(() => {
		console.log(projects);
	}, [projects]);

	const scrollToAllProjects = () => {
		allProjectsRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	const buildRow = (project, index) => {
		if ("active" in project && project.active === false) return null;

		return <ProjectCard key={index} project={project} index={index} />;
	};

	return (
		<div className="projects-wrapper">
			<div className="hero-wrapper">
				<div className="hero-container">
					<h3 className="ProjectsHeader">My Projects</h3>
					<div className="download">
						<a onClick={() => scrollToAllProjects()}>
							<span>View All</span>
						</a>
					</div>
				</div>

				<div className="hero-mouse">
					<div className="mouse"></div>
				</div>
			</div>

			<div ref={allProjectsRef} id="allProjects" className="projects-row">
				{projects.map(buildRow)}
			</div>
		</div>
	);
};

export default ProjectsPage;
