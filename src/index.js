const path = require("path");

module.exports = function(context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { squadwe } = themeConfig || {};

  if (!squadwe) {
    throw new Error(
      `You need to specify 'squadwe' object in 'themeConfig'`
    );
  }

  const {
    websiteToken,
    baseURL = "https://app.squadwe.com",
    enableInDevelopment = false
  } = squadwe;

  if (!websiteToken) {
    throw new Error(
      "Website Token is missing. Please add a website token to continue."
    );
  }

  const squadweEnabled =
    process.env.NODE_ENV === "production" || enableInDevelopment;

  return {
    name: "@squadwe/docusaurus",

    injectHtmlTags() {
      if (!squadweEnabled) {
        return {};
      }

      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
              (function(d,t) {
                var BASE_URL="${baseURL}";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.async=!0;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.squadwe.run({ websiteToken: '${websiteToken}', baseUrl: BASE_URL })
                }
              })(document,"script");
            `
          }
        ]
      };
    }
  };
};
