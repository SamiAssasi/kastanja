module.exports = {
  siteMetadata: {
    title: "kastanja",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "4NvmMjG1gOa0-8y2psShmSEvR1klEZLqIOKA2NkaGwQ",
        spaceId: "77ec27xvxmfo",
        downloadLocal: true
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",

  ],
};
