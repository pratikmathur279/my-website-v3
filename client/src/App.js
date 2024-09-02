import React, { useState, useCallback, useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	GoogleReCaptchaProvider,
	GoogleReCaptcha,
} from "react-google-recaptcha-v3";

//REACT ROUTER V6
import {
	BrowserRouter,
	Route,
	Switch,
	Routes,
	useSearchParams,
} from "react-router-dom";
import NotFound from "./components/404/404.js";
import {
	getExperience,
	getProjects,
	getSkills,
	getTechnology,
} from "./actions/website.js";

// layouts
const Header = lazy(() => import("./components/layout/header.js"));
const Footer = lazy(() => import("./components/layout/footer.js"));

const Homepage = lazy(() => import("./components/homepage/homepage.js"));
const AboutPage = lazy(() => import("./components/about/aboutPage.js"));
const BlogPage = lazy(() => import("./components/blogs/blogPage.js"));
const ContactPage = lazy(() => import("./components/contact/contactPage.js"));
const ResumePage = lazy(() => import("./components/resume/resumePage.js"));
const ProjectsPage = lazy(() =>
	import("./components/projects/projectsPage.js")
);
const ProjectDetails = lazy(() =>
	import("./components/projectDetails/projectDetails.js")
);

const App = (props) => {
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProjects());
		dispatch(getSkills());
		dispatch(getExperience());
		dispatch(getTechnology());
	}, []);

	return (
		<div className="AppLayout-wrapper">
			<Suspense>
				<Header />

				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/projects/:slug" element={<ProjectDetails />} />
					<Route path="/experience" element={<ResumePage />} />
					<Route path="/contact" element={<ContactPage />} />

					<Route path="*" element={<NotFound />} />
				</Routes>

				<Footer />
			</Suspense>
		</div>
	);
};

export default App;
