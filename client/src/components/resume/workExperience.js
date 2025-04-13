import React from "react";

import Experience from "./experience.js";

const WorkExperience = (props) => {
	const buildColumns = (col, i) => {
		return (
			<div className="tech-col" key={i} id={"tech-col-" + i}>
				{col}
			</div>
		);
	};

	const buildExperiences = (exp) => {
		return (
			<div key={exp.id} className="content">
				<Experience data={exp} />
			</div>
		);
	};

	return (
		<React.Fragment>
			<div className="Section">
				<div className="header">
					<h2>Technologies</h2>
				</div>

				<div className="content-row TechnologyRow">
					{props.technology.map(buildColumns)}
				</div>
			</div>

			<div className="Section">
				<div className="header">
					<h2>Work Experience</h2>
				</div>

				<div className="content-row">
					<div className="content">
						<h3>Software Developer</h3>
						<div class="container">
							<h4>
								Total Mortgage Services, LLC, <span>July 2018 - Present</span>
							</h4>
						</div>
						<ul class="responsibilities">
							<li>
								<strong>Embr Marketing Platform:</strong> Built and maintained a
								centralized marketing hub using React.js, PHP Laravel, and SASS,
								streamlining personalized content distribution and project
								management.
							</li>
							<li>
								<strong>User Engagement & Conversions:</strong> Developed
								mortgage calculators, marketing platforms, and pre-qualification
								apps, improving SEO, increasing traffic, and boosting engagement
								by 30%.
							</li>
							<li>
								<strong>SEO & Organic Traffic Growth:</strong> Launched a React
								+ NodeJS-based learning center, optimizing for target keywords
								and backlinks, leading to a{" "}
								<strong>67% increase in organic traffic</strong>.
							</li>
							<li>
								<strong>Marketing Integrations:</strong> Integrated Facebook,
								Instagram, and LinkedIn APIs to automate and simplify marketing
								content distribution.
							</li>
							<li>
								<strong>Security & Authentication:</strong> Implemented
								SAML-based SSO with Auth0 and Azure Directory, improving
								security and user experience.
							</li>
							<li>
								<strong>AI-Powered Chatbot:</strong> Built a Microsoft Teams &
								Slack chatbot using Node.js & Express.js, integrated with
								Salesforce for automated lead qualification using NLP.
							</li>
							<li>
								<strong>Payment & Data Automation:</strong> Integrated Chase
								Orbital Gateway & Stripe for seamless payments and developed
								OAuth 2.0-powered applications for automated data sync with
								Facebook Ads & Blend.
							</li>
						</ul>
					</div>

					<div className="content">
						<h3>Software Developer</h3>
						<div class="container">
							<h4>
								Inbiz Concepts Inc, <span>Feb 2018 - July 2018</span>
							</h4>
							<h4>Client: Findability Sciences</h4>
						</div>
						<ul class="responsibilities">
							<li>
								Designed and developed a chatbot UI using AngularJS, integrating
								IBM Tone Analyzer for sentiment analysis.
							</li>
							<li>
								Built a Node.js-based real-time inventory management system
								syncing MySQL & MongoDB data.
							</li>
							<li>
								Developed RESTful APIs for chatbot interactions and backend data
								exchange.
							</li>
						</ul>
					</div>

					<div className="content">
						<h3>Software Developer - Intern</h3>
						<div class="container">
							<h4>
								Astute Business Solutions Pvt. Ltd.,{" "}
								<span>June 2016 - Aug 2016</span>
							</h4>
						</div>
						<ul class="responsibilities">
							<li>
								Built an AJAX-driven web app to enhance user experience with
								JSON-based data exchange.
							</li>
							<li>
								Designed a responsive UI for Youth4Jobs using Bootstrap 4 and
								AngularJS.
							</li>
						</ul>
					</div>

					<div className="content">
						<h3>Software Developer - Intern</h3>
						<div class="container">
							<h4>
								Astute Business Solutions Pvt. Ltd.,{" "}
								<span>Aug 2014 - Aug 2015</span>
							</h4>
						</div>
						<ul class="responsibilities">
							<li>
								Developed a MEAN stack web app for Youth4Jobs, migrating legacy
								data to an ERP platform.
							</li>
							<li>
								Created a real-time Node.js + Socket.io server for dynamic data
								exchange with AngularJS & MongoDB.
							</li>
						</ul>
					</div>

					<div className="content">
						<h3>Software Developer - Intern</h3>
						<div class="container">
							<h4>
								IBM India Pvt. Ltd., <span>Jan 2014 - July 2014</span>
							</h4>
						</div>
						<ul class="responsibilities">
							<li>
								Developed E-Postal Services, an enterprise cloud application
								using J2EE & Struts MVC.
							</li>
							<li>
								Built RESTful APIs for XML/JSON data exchange and integrated
								AJAX for real-time UI updates.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default WorkExperience;
