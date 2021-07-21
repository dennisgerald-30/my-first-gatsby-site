module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
    titleTemplate: "%s | My Gatsby Site",
    description:
        "Description for my first gatsby site.",
    twitterUsername: "@dennisgerald30",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg" // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-image",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `photography`,
        path: `${__dirname}/photography`,
      }
    },
  ],
};
