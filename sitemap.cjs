const SitemapGenerator = require("sitemap-generator");

const generator = SitemapGenerator("https://brishack.io/", {
    stripQuerystring: false,
    maxDepth: 5,
    filepath: "./public/sitemap.xml"
});

// Register event listeners
generator.on("done", () => {
    console.log("Sitemap successfully created!");
});

// Start the crawler
generator.start();
