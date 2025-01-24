import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { motion, useInView } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import Hexagons from "./hexagons";
import FooterImage from "../layout/footerImage";

import { getSkills } from "../../actions/website.js";
import SkillsBar from "./skillsBar";
import { Link } from "react-router-dom";
import MyExpertise from "../myExpertise/my-expertise.js";

import LazyLoadImg from "../common/lazyloadImg.js";

const Homepage = (props) => {
	const dispatch = useDispatch();
	const { skills, experience, education } = useSelector(
		(state) => state.GlobalReducer
	);

	// Animation Variants
	const slideUp = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	// In-view logic
	const headingRef = useRef(null);
	const isInView = useInView(headingRef, { once: true });

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

	const buildExperiences = (exp) => {
		const fromYear = new Date(exp.from).getFullYear();
		return (
			<div key={exp.id} className="experience">
				<div className="sphere">
					<p>{fromYear}</p>
				</div>
				<div className="content">
					<h4>{exp.name}</h4>
					<p>{exp.description}</p>
				</div>
			</div>
		);
	};

	const buildEducation = (edu) => {
		const fromYear = new Date(edu.from).getFullYear();
		return (
			<div key={edu.id} className="experience">
				<div className="sphere">
					<p>{fromYear}</p>
				</div>
				<div className="content">
					<h4>{edu.institution}</h4>
					<p>{edu.course}</p>
				</div>
			</div>
		);
	};

	return (
		<div className="Homepage">
			<div className="HomepageContainer hero-wrapper">
				<div className="homepage-container">
					<div className="hero-content">
						<div className="content-wrapper">
							<h4>Hello! My name is</h4>
							<h1>Pratik Mathur</h1>

							<div className="hero">
								<div className="static-text">I'm a</div>
								<TypeAnimation
									sequence={[
										"Developer.",
										1500,
										"Technophile.",
										1500,
										"Gamer.",
										1500,
										"Freelancer.",
										1500,
										"AI Enthusiast.",
										1500,
									]}
									speed={30}
									wrapper="span"
									repeat={Infinity}
								/>
							</div>

							<div className="description">
								<p>
									I’m a software engineer specializing in building and designing
									exceptional digital experiences. I have a passion for creating
									intuitive, dynamic and cross-platform user experiences.
								</p>
							</div>
						</div>
					</div>

					<div className="my-image">
						<img
							src="https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/pratik_mathur.JPG"
							alt="My P"
						/>
					</div>
				</div>

				<div className="social-icons-wrapper">
					<FooterImage
						icon="AiFillLinkedin"
						size="32"
						color="white"
						alt="LinkedIn"
						url="https://www.linkedin.com/in/pratik-mathur/"
						target="_blank"
					/>
					<FooterImage
						icon="AiFillGithub"
						size="32"
						color="white"
						alt="Github"
						url="https://github.com/pratikmathur279"
						target="_blank"
					/>
					<FooterImage
						icon="AiOutlineInstagram"
						size="32"
						color="white"
						alt="Instagram"
						url="https://www.instagram.com/pratikmathur279/"
						target="_blank"
					/>
					<FooterImage
						icon="AiOutlineMail"
						size="32"
						color="white"
						alt="E-Mail"
						url="mailto:hello@pratikmathur.com"
					/>
					<FooterImage
						icon="FaWhatsapp"
						size="32"
						color="white"
						alt="E-Mail"
						url="https://wa.me/7039815938"
						target="_blank"
					/>
				</div>

				<div className="hero-mouse">
					<div className="mouse"></div>
				</div>
			</div>

			<div className="descriptionContainer">
				<div className="descriptionWrapper">
					<div className="descriptionImage">
						<LazyLoadImg
							src={
								"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/AdobeStock_432968278_750x483.png"
							}
							alt="Web Development technologies map"
						/>
					</div>

					<div className="description">
						<motion.h1
							ref={headingRef}
							variants={slideUp}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							transition={{ duration: 0.8 }}
						>
							My passion and focus is web development
						</motion.h1>
						<p>
							I'm a passionate software developer driven by turning ideas into
							reality. I focus on crafting robust web applications and software
							that prioritizes a fantastic user experience. In my work, I take
							great pride in:
						</p>
						<ul>
							<li>
								<b>Bringing ideas to life:</b> I love collaborating and
								transforming concepts into user-friendly applications.
							</li>
							<li>
								<b>Building robust applications:</b> I strive to create reliable
								and secure software that can stand the test of time.
							</li>
							<li>
								<b>Exceptional user experience (UX):</b> At the heart of
								everything I do is a focus on making applications intuitive and
								enjoyable to use.
							</li>
						</ul>

						<p>
							Want to learn more about how I can help you achieve your
							development goals?{" "}
							<Link to="/contact">Don't hesitate to reach out!</Link>
						</p>
					</div>
				</div>
			</div>

			<MyExpertise />

			{/* <Hexagons hexagons={hexagons} /> */}

			<div className="flex-container-lg experience-education-wrapper">
				<div className="experience-wrapper">
					<motion.h1
						ref={headingRef}
						variants={slideUp}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 0.8 }}
					>
						Experiences
					</motion.h1>

					<motion.div
						className="wrapper"
						variants={slideUp}
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 0.8 }}
					>
						{experience.map(buildExperiences)}
					</motion.div>
				</div>

				<div className="experience-wrapper">
					<motion.h2
						ref={headingRef}
						variants={slideUp}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 0.8 }}
					>
						Education
					</motion.h2>
					<motion.div
						className="wrapper"
						variants={slideUp}
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 0.8 }}
					>
						{education.map(buildEducation)}
					</motion.div>
				</div>
			</div>

			{/* <div className="intro-skills-wrapper">
				<div className="IntroContainer">
					<div className="Description">
						<p>
							A passionate software developer with 6+ years of experience
							building innovative digital products. I've thrived in remote
							environments collaborating with talented individuals on projects
							for both businesses and consumers. Throughout my career, I've
							embraced diverse opportunities, encountering both successes and
							challenges. This has fueled my drive to continuously expand my
							knowledge and refine my software development skillset. Even after
							years in the field, my enthusiasm for crafting solutions through
							code remains as strong as ever.
						</p>
						<br />
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
			</div> */}
		</div>
	);
};

export default Homepage;
