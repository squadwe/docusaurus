### @squadwe/docusaurus-plugin

This plugin enables Squadwe in Docusaurus powered websites.

#### Install the plugin

1. Add the plugin to your project.

```
yarn add @squadwe/docusaurus-plugin
```

or

```
npm install @squadwe/docusaurus-plugin --save
```

2. Configure the plugin in `docusaurus.config.js`

```js
// docusaurus.config.js
module.exports = {
  plugins: ["@squadwe/docusaurus-plugin"],
  themeConfig: {
    squadwe: {
      websiteToken: "Your website inbox token",
      baseURL: "https://app.squadwe.com",  // optional
      enableInDevelopment: false,  // optional
    }
  }
};
```
