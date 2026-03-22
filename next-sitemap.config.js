module.exports = {
    siteUrl: 'https://portfolio-maurya-soni.vercel.app',
    generateRobotsTxt: false,
    sitemapSize: 5000,
    exclude: ['/thank-you', '/404', '/500'],
    trailingSlash: true,
    transform: async (config, path) => {
        const pageDates = {
            '/': '2025-05-06',
            '/contact-me': '2025-05-06',
        };
        return {
            loc: path,
            lastmod: pageDates[path] ?? new Date().toISOString().split('T')[0],
        };
    },
};
