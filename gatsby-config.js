module.exports = {
  siteMetadata: {
    siteUrl: "https://toothandkeys.com",
    title: "Tooth and Keys",
    titleTemplate: "%s | Tooth and Keys",
    description:
        "A website by a Dentist and an Engineer.",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-W14Q07E3G1", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            'charmonman',
            `monte carlo`,
            'montez',
            'monda'
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tooth and Keys`,
        short_name: `Tooth and Keys`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/icon.png`
      }
    },
  ],
};
