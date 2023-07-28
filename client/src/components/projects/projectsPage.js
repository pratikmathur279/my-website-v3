import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProjects } from "../../actions/website";
import Project from "./project";
import ProjectInformation from "./projectInformation.js";

const ProjectsPage = (props) => {
	const dispatch = useDispatch();
	const [showProject, setShowProject] = useState(false);
	const [selected, setSelected] = useState(null);

	const { projects } = useSelector((state) => state.GlobalReducer);

	useEffect(() => {
		dispatch(getProjects());
	}, []);

	function openModalHandler(id) {
		if (showProject) {
			document.getElementsByTagName("body")[0].classList.remove("no-scroll");

			setShowProject((prev) => !prev);
		} else {
			let project = _.find(projects, (p) => {
				return p.id == id;
			});

			if (project) {
				setShowProject(true);
				setSelected(project);
				document.getElementsByTagName("body")[0].classList.add("no-scroll");
			}
		}
	}

	const buildRow = (card) => {
		return (
			<Project
				card={card}
				key={card.id}
				src={card.url}
				id={card.id}
				toggleModal={openModalHandler}
			/>
		);
	};

	return (
		<div className="projects-wrapper">
			<div className="hero-wrapper">
				<div className="hero-container">
					<h3 className="ProjectsHeader">Projects</h3>
				</div>

				<div className="hero-mouse">
					<div className="mouse"></div>
				</div>
			</div>

			{showProject && (
				<div
					className="Modal"
					style={{
						transform: showProject ? "translateY(0)" : "translateY(-100vh)",
						opacity: showProject ? "1" : "0",
					}}
				>
					<div className="modal-content">
						<div
							id="close"
							onClick={() => {
								openModalHandler();
							}}
						></div>
						<ProjectInformation showProject={showProject} selected={selected} />
					</div>
				</div>
			)}

			<div className="ProjectRow">{projects.map(buildRow)}</div>
		</div>
	);
};

export default ProjectsPage;
