import React, { useState, useEffect } from "react";

const BlogPage = (props) => {
	const [blogs, setBlogs] = useState([
		{
			url: "https://medium.com/@pratikmathur279/advanced-node-js-security-for-production-environments-09b4662ded90",
			author: "Pratik Mathur",
			header: "Advanced Node.js Security for Production Environments",
			image_url:
				"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*zWp5cjnHcuX8V4VjKKCgBw.jpeg",
		},
		{
			url: "https://medium.com/@pratikmathur279/how-to-configure-nginx-as-a-reverse-proxy-on-ubuntu-22-04-9f827d3b1578",
			author: "Pratik Mathur",
			header: "How To Configure Nginx as a Reverse Proxy on Ubuntu 22.04",
			image_url:
				"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LjPjmpQ9L362dzRbh5ydAQ.jpeg",
		},
		{
			url: "https://medium.com/@pratikmathur279/how-to-build-a-responsive-iframe-using-postmessage-60b33ffa860f",
			author: "Pratik Mathur",
			header: "How to build a responsive iframe using postMessage",
			image_url:
				"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ofCDJfZW2C-W44YBlu44Bw.png",
		},
		{
			url: "https://hackernoon.com/9-javascript-design-patters-you-will-love",
			header: "9 JavaScript Design Patterns You Will Love",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/KmNf0Wo4w4avMoWS6xST2YLQABu2-xh9304q.jpg",
		},
		{
			url: "https://hackernoon.com/how-to-buy-bitcoin-anonymously-the-most-secure-ways",
			header: "How to Buy Bitcoin Anonymously: The Most Secure Ways",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/wexjcdgw1fNEWcbWaI66m8Cri743-bsf2exe.jpg",
		},
		{
			url: "https://hackernoon.com/testing-evolution-and-web-applications-its-about-survival-of-the-fittest",
			header:
				"Testing, Evolution, and Web Applications: It’s About Survival of the Fittest",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/hQ098u52DzPm2Y4UITQcQXtLRAk2-ubb3g93.jpg",
		},
		{
			url: "https://hackernoon.com/choosing-between-prototyping-vs-mvps-in-software-development",
			header: "Choosing Between Prototyping vs MVPs in Software Development",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/aj3xbFpstic3cuoNnxwYiHpBNyj2-n692nzd.jpg",
		},
		{
			url: "https://luminousmen.com/post/what-are-the-best-engineering-principles",
			header: "What Are The Best Software Engineering Principles?",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/what-are-the-best-engineering-principles-6.jpg",
		},
		{
			url: "https://hackernoon.com/how-to-develop-a-bug-triage-process-efficiently",
			header: "How to Develop a Bug Triage Process Efficiently",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/D7iB4iTOHyaFEVCL0l1uPlKRMsS2-yv93gmq.jpg",
		},
		{
			url: "https://dzone.com/articles/chatgpt-vs-gpt3-the-ultimate-comparison-features",
			header: "ChatGPT vs. GPT3: The Ultimate Comparison",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/eb23d82c26b9e4f0c728dc93463c5798.webp",
		},
		{
			url: "https://dkb.io/post/google-search-is-dying",
			header: "Google Search Is Dying",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/7f5b7f499973f5947d6f40ae09e18d30.webp",
		},
		// {
		// 	url: "https://dev.to/render/git-organized-a-better-git-flow-56go",
		// 	header: "Git Organized: A Better Git Flow",
		// 	image_url:
		// 		"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/427yh9kull5oycojetde.webp",
		// },
		{
			url: "https://devdojo.com/abhiraj/10-github-repos-you-cannot-miss-out-on",
			header: "10 GitHub repos you cannot miss out on",
			image_url:
				"https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/541c4c594c69987ed3c05ff7f9edce95.webp",
		},
	]);

	const buildBlogs = (b) => {
		let imageUrl;

		if (b.image) {
			imageUrl = `/images/blogs/${b.image}`;
		}

		if (b.image_url) {
			imageUrl = b.image_url;
		}

		return (
			<div id="blog">
				<a href={b.url} target="_blank">
					<div className="image-container">
						<img src={imageUrl} />
					</div>

					<h3>{b.header}</h3>
					{b.author && <h5>{b.author}</h5>}
					<p className="read-more">Read more</p>
				</a>
			</div>
		);
	};

	return (
		<div className="blog-builder-wrapper">
			<div className="hero-wrapper">
				<div className="hero-container">
					<h3>My Insights</h3>
				</div>

				<div className="hero-mouse">
					<div className="mouse"></div>
				</div>
			</div>
			<div className="blogs-wrapper">
				<div className="blogs-container">{blogs.map(buildBlogs)}</div>
			</div>
		</div>
	);
};

export default BlogPage;
