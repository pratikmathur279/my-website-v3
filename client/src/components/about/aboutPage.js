import React from "react";
import ReactIcons from "../common/reactIcons";

const AboutPage = (props) => {
	return (
		<div className="about-page-wrapper">
			<div className="hero-wrapper">
				<div className="hero-container">
					<h3>My Passions & Personality</h3>
				</div>

				<div className="hero-mouse">
					<div className="mouse"></div>
				</div>
			</div>

			<div className="description">
				<h3>About me</h3>
				<div className="description-content">
					<p>
						I am a web developer, currently working at Total Mortgage Services,
						LLC. My journey as a developer started at the age of 13, where I was
						introduced to the concepts of web development such as HTML and CSS.
						After that, I got my Bachelors and Master’s degree in Computer
						Science. This has helped me widen my range of knowledge and gather
						experiences in the field of Web Development.{" "}
					</p>
					<p>
						Constantly seeking to improve my skillset, I thrive on learning new
						web technologies in my spare time through online resources such as
						udemy.com and coursera.org, as well as diving head-first into new
						and unfamiliar projects.
					</p>
					<p>
						{" "}
						In my spare time, you’ll find me playing video games, playing soccer
						and learning new programming languages.
					</p>
				</div>
			</div>

			<div className="description backstory">
				<h3>Back Story</h3>
				<div className="description-content">
					<p>
						{" "}
						I knew what I wanted to do by the age of 13. The short version is
						that I loved playing video games growing up and always had an
						interest to know how they were made. So, a small idea turned into me
						wanting to make my own video game. And after a few friends helping
						to fill up notebooks with thoughts, ideas, and drawings we quickly
						realized that we needed a website. Obviously, this was before the
						internet was filled with this type of knowledge readily available at
						your fingertips (YouTube, Facebook, and even MySpace weren't a thing
						yet). So, I was able to teach myself the basics and build something.
					</p>

					<p>
						Fast-forwarding, after graduating college with an Bachelors degree
						in Computer Science and Masters degree in Computer Science, I made
						my way into multiple jobs. First starting out with a couple of
						internships as a Software Developer, I gained professional and
						industry experience. This was the start of many core understandings
						and played a key role in my thought process when thinking about
						design as a whole, especially when it comes to the system design and
						development. After that, working my way into the development
						industry was a path that I created for myself based on one question
						that I still find myself asking, how does it work? This was the one
						question that started the passion I call my career.
					</p>

					<p>
						After years in the industry, and having gone through multiple
						opportunities, some good, and some bad, I am in the process of
						widening my range of knowledge and improving my skillset in Software
						Development. So, here I am years later still doing the same thing,
						and still loving it.
					</p>
				</div>
			</div>

			<div className="technical-desc">
				<h3>Technical Experience</h3>
				<div className="description-content">
					<p>A full-stack software engineer with over 4 years of experience.</p>
					<p>
						I have maintained, developed and launched multiple projects from
						scratch, carrying the development of its' back-end and front-end
						codebases.
					</p>
					<p>
						My current toolset includes React, Redux, Angular, Vue.js,
						JavaScript & TypeScript (Node.js as well), PHP Laravel, Kubernetes,
						Docker and all the other various frameworks, libraries and
						technologies related to them.
					</p>
				</div>

				<div className="front-end-desc">
					<h4>
						<ReactIcons id="CustomTag" size="24" icon="BsDisplay" />
						FRONT-END WEB DEVELOPMENT
					</h4>
					<p>I specialize in applications written in both React and Angular.</p>
					<p>My current experience and skills in front-end includes:</p>
					<ul>
						<li>
							TypeScript/JavaScript development: bootstraping, refactoring,
							improving the structure, reliability, build setup;
						</li>
						<li>
							full integration of front-end development using tools like Webpack
							with features like automatic code reload, code minifications,
							multiple environments support, CI/CD, Storybook components
							library, automated testing of accessibility, server-side render
							and visual snapshots
						</li>
						<li>sense of system design and UX,</li>
						<li>
							huge experience in almost all of the JS ecosystems, by having used
							in the past many libraries like Next.js, React, Redux,
							Redux-Observable, RxJS, Angular, Ionic Framework, Backbone,
							jQuery, Lodash/Underscore and many else.
						</li>
					</ul>
				</div>

				<div className="backend-desc">
					<h4>
						<ReactIcons id="CustomTag" size="24" icon="FaCode" />
						BACKEND WEB DEVELOPMENT
					</h4>
					<p>
						In back-end development, my current stack involves PHP Laravel,
						Java, NodeJS and Ruby on Rails.
					</p>
					<p>
						Nearly every app I have launched in the past had the back-end done
						also by me. In order to improve the development speed, performance
						and reliability, I have changed languages and frameworks already
						multiple times, from PHP, Ruby to Elixir and Node.js; configured
						servers using just the shell, then Apache and wampp, and now Docker
						and Kubernetes.
					</p>
					<ul>
						<li>
							splitting the back-end into separate domains and microservices,
						</li>
						<li>
							cooperation with APIs, remote data synchronizations, cloud
							servers, asynchronous workers,
						</li>
						<li>
							using different types of databases (like PostgreSQL, MySQL,
							Elasticsearch, Redis)
						</li>
						<li>
							dividing the servers into different machine nodes / docker
							containers; database sharding; load balancing,
						</li>
						<li>
							refactoring existing applications, by improving code readibility,
							separating concerns into separate functions/classes/modules,
							taking the business logic out from your request/response layer
							into separate modules (DDD), and moving the app architecture into
							an event-based one
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
