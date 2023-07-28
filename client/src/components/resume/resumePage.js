import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ReactIcons from "../common/reactIcons";
import { getExperience, getTechnology } from "../../actions/website";
import WorkExperience from "./workExperience";

const ResumePage = (props) => {
	const dispatch = useDispatch();
	const { experience, technology } = useSelector(
		(state) => state.GlobalReducer
	);

	useEffect(() => {
		dispatch(getExperience());
		dispatch(getTechnology());
	}, []);

	return (
		<div className="work-experience-wrapper">
			<div className="hero-wrapper">
				<div className="hero-container">
					<h3>Dig a little deeper.</h3>
					<div className="download">
						<a
							href="https://pratik-resume.s3.amazonaws.com/PratikMathur-Resume.pdf"
							target="_blank"
							className="button"
						>
							<span>
								Download Resume{" "}
								<ReactIcons id="CustomTag" size="24" icon="BsArrowRight" />
							</span>
						</a>
					</div>
				</div>

				<div className="hero-mouse">
					<div className="mouse"></div>
				</div>
			</div>

			<WorkExperience
				experience={experience}
				// loading={this.state.loading}
				technology={technology}
			/>
			{/* <Education />
			<Certifications /> */}

			<div className="latest-projects-wrapper">
				<div className="Section">
					<h2>Latest Work</h2>
					<div className="content-row">
						<div className="latest-projects">
							<h3>Interested to see what I’ve been up to?</h3>
							<Link exact to="/projects">
								View Projects
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumePage;
