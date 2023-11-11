import type { GatsbyConfig } from 'gatsby';
require('dotenv').config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `moztiq.github.io`,
    siteUrl: `https://moztiq.github.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vpyfljks33op',
        accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
  ],
};

export default config;
