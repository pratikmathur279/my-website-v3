import React from "react";

const ProjectInformation = (props) => {
	console.log(props);

	let url = props.selected.url;
	return (
		<div className="ProjectInformation">
			<img
				id={props.selected.index}
				src={"./images/" + props.selected.url}
				alt={props.selected.name}
			></img>
			<div className="projectBody">
				<h2>{props.selected.name}</h2>
				<p>{props.selected.description}</p>
				{props.selected.github ? (
					<p>
						To view the source code,{" "}
						<a href={props.selected.github} target="_blank">
							click here
						</a>
					</p>
				) : (
					""
				)}
				{props.selected.live_instance ? (
					<p>
						<a href={props.selected.live_instance} target="_blank">
							Click here
						</a>{" "}
						to play the game!
					</p>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default ProjectInformation;
