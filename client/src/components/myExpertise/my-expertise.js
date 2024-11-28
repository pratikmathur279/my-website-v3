import React, { useState } from "react";

const MyExpertise = () => {
	const [expertise, setExpertise] = useState([
		{
			title: "Web Design & Development",
			description:
				"Custom websites blending function and aesthetics with cutting-edge technology for unique online experiences. ",
		},
		{
			title: "System Optimization",
			description:
				"Revamping existing systems, improving efficiency and reducing costs through innovative code solutions. ",
		},
		{
			title: "Mobile App Development",
			description:
				"Mobile apps tailored for engaging, user-friendly experiences that meet modern digital demands.",
		},
		{
			title: "Enterprise Solutions",
			description:
				"Enterprise-level software that scales with business needs, providing reliability and performance. ",
		},
		{
			title: "SEO Boost",
			description:
				"Comprehensive SEO services to enhance digital presence and improve website rankings effectively.",
		},
		{
			title: "AI Integration",
			description:
				"Leveraging AI for personalized tech solutions, improving user interaction and predictive capabilities.",
		},
	]);

	return (
		<div className="flex-container-lg ">
			<div className="my-expertise-wrapper">
				<h1>My Expertise</h1>

				<div className="my-expertise-container">
					{expertise.map((item, index) => (
						<div key={index} className="item">
							<p className="index">{(index + 1).toString().padStart(2, "0")}</p>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MyExpertise;
