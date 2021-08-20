# Lyft - David Choi - Front End Engineer

> Inspired by [lyft.com](https://www.lyft.com/)

## David Choi's Solution

Front End application using React.js for UI, Next.js for SSR and setup, Styled Components for CSS in JS consuming data from Contentful

- Copied the style and content from lyft.com
- Created my own React Components writing CSS with Styled Components
- Used Next.js to help with SSR, routing, image optimization, and everything to set up my project quickly.
- Pulled content data from GraphQL Contentful API at `https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={CDA_TOKEN}`
- Mobile and Desktop friendly

<!-- ## To Do

- Bring all content into Contentful
- Create dynamic Page Content Model for Header, Content, and Footer
- More reusable components
- Utilities and helper functions to handle business logic -->

## Lighthouse Score

![Lighthouse Score Screenshot](./docs/content-model-overview.jpg)

## Dev Setup

1. Install dependencies

```
yarn install
yarn dev
```

2. Go to [http://localhost:3000](http://localhost:3000)

## View deployed production application

1. Go to [https://lyft-davidschoi.vercel.app/](https://lyft-davidschoi.vercel.app/)
