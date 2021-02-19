require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "AudioC0RE",
    titleTemplate: "%s · the (fake) headphone sharing startup",
    description: "the leading headphones sharing app in the world",
    siteUrl: "https://audioc0re-main.netlify.app/",
    image: "",
    twitterUsername: "@audioc0re",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-source-formium",
      options: {
        // Get your projectId from https://dashboard.formium.io
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        // Generate a personal access token by going to https://dashboard.formium.io/account#tokens
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#f7f0eb",
        display: "standalone",
        icon: "src/images/icon.png",
        name: "AudioC0RE",
        short_name: "AudioC0RE",
        start_url: "/",
        theme_color: "#a2466c",
      },
    },
    "gatsby-plugin-offline",
  ],
};
