import puppeteer from "puppeteer";
import fs from "fs";

export async function generateSitemap() {
	const ignoreUrls = ["hello@pratikmathur.com"];

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// Initialize a set to store unique URLs and a queue to manage BFS
	let visitedUrls = new Set();
	let queue = ["https://pratikmathur.com"];

	await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
	console.log("Scraping Page");

	while (queue.length > 0) {
		const currentUrl = queue.shift();

		// Skip URLs that have already been visited
		if (visitedUrls.has(currentUrl)) continue;

		// Mark the URL as visited
		visitedUrls.add(currentUrl);

		try {
			// Navigate to the current URL
			await page.goto(currentUrl, { waitUntil: "networkidle2" });
			console.log(`Scraping ${currentUrl}`);

			// Extract all URLs on the current page
			const urlsOnPage = await page.evaluate((ignoreUrls) => {
				const anchorElements = document.querySelectorAll("a");
				const links = [];

				anchorElements.forEach((anchor) => {
					const href = anchor.href;
					// Ensure the link is within the same domain
					if (
						href &&
						href.includes("pratikmathur.com") &&
						href.includes("https://")
					) {
						const url = new URL(href);
						links.push(url.origin + url.pathname);
					}
				});

				return links;
			}, ignoreUrls);

			// Add new URLs to the queue for further processing
			for (const url of urlsOnPage) {
				if (!visitedUrls.has(url) && !queue.includes(url)) {
					queue.push(url);
				}
			}
		} catch (error) {
			// Handle errors such as navigation failures or timeouts
			console.log(`Error scraping ${currentUrl}:`, error);
		}
	}

	// Convert the Set to an array and generate the sitemap
	generateSitemapXml([...visitedUrls]);

	await browser.close();
}

function generateSitemapXml(urls) {
	console.log(urls);

	const currentDate = formatCurrentDate(new Date());
	const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
	const urlsetOpen =
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
	const urlsetClose = "</urlset>";
	const urlTags = urls
		.map(
			(url) => `
          <url>
            <loc>${url}</loc>
            <lastmod>${currentDate}</lastmod>
            <priority>1.00</priority>
          </url>`
		)
		.join("");

	const sitemapXml = `${xmlHeader}\n${urlsetOpen}\n${urlTags}\n${urlsetClose}`;

	fs.writeFileSync("../client/public/sitemap.xml", sitemapXml, "utf-8");
}

function formatCurrentDate(timestamp) {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;
}
