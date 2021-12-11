const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'http://localhost:8000',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const siteUrl = NETLIFY_SITE_URL;

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://sun-freeze-system.netlify.app',
    title: '태양냉동',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136405885-4',
        head: true,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `sun freeze system`,
        short_name: `sun freeze`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#f7f0eb`,
        display: `standalone`,
        icon: `src/images/favicons/android-chrome-192x192.png`,
        icons: [
          {
            src: `src/images/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `192 x 192`,
          },
          {
            src: `src/images/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `512 x 512`,
          },
        ], // Add or remove icon sizes as desired
        cache_busting_mode: `none`, // `query`(default), `name`, or `none`
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        options: {
          host: 'https://sun-freeze-system.netlify.app',
          sitemap: 'https://sun-freeze-system.netlify.app/sitemap/sitemap-index.xml',
          policy: [{ userAgent: '*', allow: '/' }],
        },
      }
    },
  ],
};
