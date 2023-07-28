import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import LogRocket from "logrocket";

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

// layouts
import Header from "./components/layout/header.js";
import Footer from "./components/layout/footer.js";

import Homepage from "./components/homepage/homepage.js";
import AboutPage from "./components/about/aboutPage.js";
import BlogPage from "./components/blogs/blogPage.js";
import ContactPage from "./components/contact/contactPage.js";
import ResumePage from "./components/resume/resumePage.js";
import ProjectsPage from "./components/projects/projectsPage.js";

// import { SocketProvider } from "./store/context/socketContext.js";

const App = (props) => {
	let dispatch = useDispatch();

	return (
		// <SocketProvider>

		<div className="AppLayout-wrapper">
			<Header />
			{/* <ToastProvider /> */}

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/resume" element={<ResumePage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>

			<Footer />
		</div>
		// </SocketProvider>
	);
};

export default App;
