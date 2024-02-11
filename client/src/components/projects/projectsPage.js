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

	useEffect(() => {
		dispatch(getProjects());
	}, []);

	useEffect(() => {
		console.log(projects);

		let split = [];
		if (window.innerWidth < 900) {
			split = createRows(projects, 1);
		} else if (window.innerWidth > 900 && window.innerWidth < 1200) {
			split = createRows(projects, 2);
		} else {
			split = createRows(projects, 3);
		}

		console.log(split);

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

	const selectProject = (project) => {
		console.log(project);
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

			<div className="container">{projectRows.map(buildRow)}</div>
		</div>
	);
};

export default ProjectsPage;
