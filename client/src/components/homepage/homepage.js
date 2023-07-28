import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TypeAnimation } from "react-type-animation";
import Hexagons from "./hexagons";

import { getSkills } from "../../actions/website.js";
import SkillsBar from "./skillsBar";

const Homepage = (props) => {
	const dispatch = useDispatch();
	const { skills } = useSelector((state) => state.GlobalReducer);

	const [isFlipped, setIsFlipped] = useState(false);
	const [hexagons, setHexagons] = useState([
		{
			id: 0,
			name: "IoIosSpeedometer",
			title: "Fast",
			desc: "Fast load times and lag free interaction",
		},
		{
			id: 1,
			name: "FaLaptop",
			title: "Responsive",
			desc: "My layouts will work on any device.",
		},
		{
			id: 2,
			name: "AiOutlineBulb",
			title: "Intuitive",
			desc: "Strong preference for easy to use, intuitive UX/UI.",
		},
		{
			id: 3,
			name: "FaRocket",
			title: "Dynamic",
			desc: "I love making dynamic websites",
		},
	]);

	useEffect(() => {
		dispatch(getSkills());
	}, []);

	return (
		<div className="Homepage">
			<div className="HomepageContainer">
				<div className="homepage-container">
					<div className="hero-content">
						<div className="content-wrapper">
							<h4>Hello!</h4>
							<h1>Pratik Mathur</h1>

							<div className="hero">
								<div className="static-text">I'm a</div>
								<TypeAnimation
									sequence={[
										"Developer.",
										1500,
										"Designer.",
										1500,
										"Gamer.",
										1500,
										"Freelancer.",
										1500,
									]}
									speed={30}
									wrapper="span"
									repeat={Infinity}
								/>
							</div>

							<div className="description">
								<p>
									I’m a software engineer specializing in building (and
									occasionally designing) exceptional digital experiences. I
									have a passion for creating intuitive, dynamic and
									cross-platform user experiences.
								</p>
							</div>
						</div>
					</div>
					<div className="my-image">
						<img src="/images/photo.jpg" alt="My Image" />
					</div>
				</div>

				<div className="hero-mouse">
					<div className="mouse"></div>
				</div>
			</div>

			<div className="descriptionContainer">
				<div className="descriptionWrapper">
					<div className="descriptionImage">
						<img alt="Web Dev" src="/images/backgrounds/Web-Dev.jpg" />
					</div>

					<div className="description">
						<h1>My passion and focus is web development</h1>
						<p>
							I'm passionate about web development and bringing ideas to life.
							My primary focus is to build robust web applications and software
							applications by building a great user experience. If you want to
							learn more about me, pick up the phone and give me a call (or
							email).
						</p>
					</div>
				</div>
			</div>

			<Hexagons hexagons={hexagons} />

			<div className="intro-skills-wrapper">
				<div className="IntroContainer">
					<div className="Description">
						<p>
							Since beginning my journey as a software developer over 6 years
							ago, I've done remote work for a few startups, and collaborated
							with talented people to create digital products for both business
							and consumer use.
						</p>
						<p>
							After years in the industry, and having gone through multiple
							opportunities, some good, and some bad, I am in the process of
							widening my range of knowledge and improving my skillset in
							Software Development. So, here I am years later still doing the
							same thing, and still loving it.
						</p>
					</div>
				</div>

				<div className="SkillsContainer">
					<SkillsBar skills={skills} />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
