import type { GatsbyConfig } from 'gatsby';
require('dotenv').config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MOZTIQ Blog`,
    siteUrl: `https://moztiq.github.io`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vpyfljks33op',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
              // noInlineHighlight: false,
              escapeEntities: {},
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
  ],
};

export default config;
