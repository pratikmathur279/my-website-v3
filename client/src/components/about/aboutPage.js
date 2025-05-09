import React from "react";
import ReactIcons from "../common/reactIcons";
import { Link } from "react-router-dom";

const AboutPage = (props) => {
	let yearsExp = new Date().getFullYear() - 2018;

	return (
		<div className="about-page-wrapper">
			<div className="hero-wrapper">
				<div className="hero-container">
					<h3>
						My Passions & <br />
						Personality
					</h3>
				</div>

				<div className="hero-mouse">
					<div className="mouse"></div>
				</div>
			</div>

			<div className="page-content-wrapper">
				<div className="Section">
					<div className="header">
						<h2>About me</h2>
					</div>

					<div className="content-row">
						<p>
							I’m a full-stack software developer passionate about creating
							innovative digital products. My journey into programming began at
							the age of 13, building web pages with HTML and CSS. Over the
							years, that spark evolved into a deep commitment to continuous
							learning and crafting impactful solutions.
						</p>
						<p>
							With a Bachelor’s and Master’s degree in Computer Science, I’ve
							built a strong technical foundation and a versatile skill set. For
							over {yearsExp} years, I’ve thrived in remote, collaborative
							environments, working on diverse projects for businesses and
							consumers alike. Each experience—whether a success or a
							challenge—has sharpened my abilities and broadened my perspective
							on software development.
						</p>
						<p>
							I’m a lifelong learner who eagerly embraces new challenges. In my
							free time, I explore cutting-edge web technologies and tackle
							unfamiliar projects through platforms like Udemy and Coursera.
						</p>
						<p>
							When I’m not coding, I enjoy playing soccer, diving into video
							games, or experimenting with new programming languages just for
							fun.
						</p>
						<p>
							I’m always open to new opportunities that align with my skills and
							passion for growth. If you’re looking for a developer who can
							deliver impactful solutions while continuously evolving, feel free
							to reach out—I’d love to connect!
						</p>

						<Link to="/contact" className="btn primary">
							Contact Me
						</Link>
					</div>
				</div>

				<div className="Section">
					<div className="header">
						<h2>Back Story</h2>
					</div>
					<div className="content-row">
						<p>
							I knew what I wanted to do by the age of 13. The short version is
							that I loved playing video games growing up and always had an
							interest to know how they were made. So, a small idea turned into
							me wanting to make my own video game. And after a few friends
							helping to fill up notebooks with thoughts, ideas, and drawings we
							quickly realized that we needed a website. Obviously, this was
							before the internet was filled with this type of knowledge readily
							available at your fingertips (YouTube, Facebook, and even MySpace
							weren't a thing yet). So, I was able to teach myself the basics
							and build something.
						</p>

						<p>
							Fast-forwarding, after graduating college with an Bachelors degree
							in Computer Science and Masters degree in Computer Science, I made
							my way into multiple jobs. First starting out with a couple of
							internships as a Software Developer, I gained professional and
							industry experience. This was the start of many core
							understandings and played a key role in my thought process when
							thinking about design as a whole, especially when it comes to the
							system design and development. After that, working my way into the
							development industry was a path that I created for myself based on
							one question that I still find myself asking, how does it work?
							This was the one question that started the passion I call my
							career.
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

				<div className="Section">
					<div className="header">
						<h2>Technical Experience</h2>
					</div>
					<div className="content-row">
						<div className="content">
							<p>
								A full-stack software engineer with over {yearsExp} years of
								experience.
							</p>
							<p>
								I have maintained, developed and launched multiple projects from
								scratch, carrying the development of its' back-end and front-end
								codebases.
							</p>
							<p>
								My current toolset includes React, Redux, Angular, Vue.js,
								JavaScript & TypeScript (Node.js as well), PHP Laravel,
								Kubernetes, Docker and all the other various frameworks,
								libraries and technologies related to them.
							</p>
						</div>

						<div className="content front-end">
							<h4>
								<ReactIcons id="CustomTag" size="24" icon="BsDisplay" />
								FRONT-END WEB DEVELOPMENT
							</h4>
							<p>
								I specialize in applications written in both React and Angular.
							</p>
							<p>My current experience and skills in front-end includes:</p>
							<ul>
								<li>
									<b>TypeScript/JavaScript development:</b> bootstraping,
									refactoring, improving the structure, reliability, build
									setup;
								</li>
								<li>
									Full integration of front-end development using tools like
									Webpack with features like automatic code reload, code
									minifications, multiple environments support, CI/CD, Storybook
									components library, automated testing of accessibility,
									server-side render and visual snapshots
								</li>
								<li>Sense of system design and UX,</li>
								<li>
									Huge experience in almost all of the JS ecosystems, by having
									used in the past many libraries like Next.js, React, Redux,
									Redux-Observable, RxJS, Angular, Ionic Framework, Backbone,
									jQuery, Lodash/Underscore and many else.
								</li>
							</ul>
						</div>

						<div className="content backend-end">
							<h4>
								<ReactIcons id="CustomTag" size="24" icon="FaCode" />
								BACKEND WEB DEVELOPMENT
							</h4>
							<p>
								In back-end development, my current stack involves PHP Laravel,
								Java, NodeJS and Ruby on Rails.
							</p>
							<p>
								Nearly every app I have launched in the past had the back-end
								done also by me. In order to improve the development speed,
								performance and reliability, I have changed languages and
								frameworks already multiple times, from PHP, Ruby to Elixir and
								Node.js; configured servers using just the shell, then Apache
								and wampp, and now Docker and Kubernetes.
							</p>
							<ul>
								<li>
									Splitting the back-end into separate domains and
									microservices,
								</li>
								<li>
									Cooperation with APIs, remote data synchronizations, cloud
									servers, asynchronous workers,
								</li>
								<li>
									Using different types of databases (like PostgreSQL, MySQL,
									Elasticsearch, Redis, NoSQL)
								</li>
								<li>
									Dividing the servers into different machine nodes / docker
									containers; database sharding; load balancing,
								</li>
								<li>
									Refactoring existing applications, by improving code
									readibility, separating concerns into separate
									functions/classes/modules, taking the business logic out from
									your request/response layer into separate modules (DDD), and
									moving the app architecture into an event-based one
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
