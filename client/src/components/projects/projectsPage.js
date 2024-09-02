import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProjects } from "../../actions/website";
import Project from "./project";
import ProjectInformation from "./projectInformation.js";
import ProjectRow from "./projectRow";

const ProjectsPage = (props) => {
	const dispatch = useDispatch();
	const [showProject, setShowProject] = useState(false);
	const [selected, setSelected] = useState({});
	const [projectRows, setProjectRows] = useState([]);

	const { projects } = useSelector((state) => state.GlobalReducer);

	const allProjectsRef = React.useRef();

	useEffect(() => {
		let split = [];
		if (window.innerWidth < 900) {
			split = createRows(projects, 1);
		} else if (window.innerWidth > 900 && window.innerWidth < 1200) {
			split = createRows(projects, 2);
		} else {
			split = createRows(projects, 3);
		}

		setProjectRows(split);
	}, [projects]);

	function createRows(orignal, length) {
		var arr = [];
		var original = _.clone(orignal);

		while (original.length > 0) {
			var split = original.splice(0, length);
			arr.push(split);
		}
		return arr;
	}

	const selectProject = (project) => {
		if ("id" in selected) {
			if (selected.id === project.id) {
				setSelected({});
				return;
			}
		}

		setSelected(project);
	};

	const buildRow = (row, index) => {
		return (
			<ProjectRow
				projects={row}
				key={index}
				selected={selected}
				selectProject={selectProject}
			/>
		);
	};

	const scrollToAllProjects = () => {
		allProjectsRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className="projects-wrapper">
			<div className="hero-wrapper">
				<div className="hero-container">
					<h3 className="ProjectsHeader">Projects</h3>
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

			<div ref={allProjectsRef} id="allProjects" className="container">
				{projectRows.map(buildRow)}
			</div>
		</div>
	);
};

export default ProjectsPage;
