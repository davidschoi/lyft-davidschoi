# Lyft - David Choi - Front End Engineer

> Inspired by [lyft.com](https://www.lyft.com/)

## David Choi's Solution

Front End application using [React.js](https://reactjs.org/) for UI, [Next.js](https://nextjs.com/) for SSR and setup, [Styled Components](https://styled-components.com/) for CSS in JS consuming data from [Contentful](https://contentful.com/), deployed through [Vercel](https://vercel.com/)

- Copied the style and content from lyft.com
- Created my own React Components writing CSS with Styled Components
- Used Next.js for routing, image optimization, and everything else to help get my project production ready quickly
- Pulled content data from GraphQL Contentful API at `https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={CDA_TOKEN}`
- Deployment through Vercel using environment variables, preview & production deployments
- Mobile and Desktop friendly

<!--
## To Do

- Bring more content into Contentful
- Create dynamic Page Content Model for Header, Content, and Footer
- Take advantage of theming for styles or perhaps upgrade to Chakra UI
- Build out reusable components
- Utilities and helper functions to handle business logic
-->

## Lighthouse Score

![Lighthouse Score Screenshot](./docs/lighthouse-scores.png)

## Dev Setup

1. Set up environment variables

From your contentful space, go to **Settings > API keys**. There will be an example Content delivery / preview token - you can use these API keys. (You may also create a new key.)

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `CONTENTFUL_SPACE_ID` should be the **Space ID** field of your API Key
- `CONTENTFUL_ACCESS_TOKEN` should be the **[Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` should be the **[Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_SECRET` should be any value you want. It must be URL friendly as the dashboard will send it as a query parameter to enable preview mode

Your `.env.local` file should look like this:

```bash
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_SECRET=...
```

2. Install dependencies and run Next.js in development mode

```
yarn install
yarn dev
```

3. Go to [http://localhost:3000](http://localhost:3000)

## View deployed production application

1. Go to [https://lyft-davidschoi.vercel.app/](https://lyft-davidschoi.vercel.app/)
