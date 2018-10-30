const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Wessel Loth | Loth.io', // Navigation and Site Title
  siteTitleAlt: 'Loth.io', // Alternative Site title for SEO
  siteUrl: 'https://loth.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/', // Used for SEO and manifest
  siteDescription: 'This is the site of Wessel Loth: Software Developer, Car Enthusiast and all-round Nerd.',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@wesselloth', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
