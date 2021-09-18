module.exports = {
  siteUrl: "https://bitemegourmet.com.au",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/cart", "/checkout"],
      },
    ],
  },
};
