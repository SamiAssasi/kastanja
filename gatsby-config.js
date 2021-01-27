module.exports = {
  siteMetadata: {
    title: "kastanja",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Ug_lpW1D1vBJMn4AjRrZ7gAWek79BU5UrrFy3Bf9x9c",
        spaceId: "77ec27xvxmfo",
      },
    },
    "gatsby-plugin-sass",
  ],
};
