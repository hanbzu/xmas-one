# xmas-one

This is a place to experiment building a fully working application with the following stack:

- [x] Next.js (React)
- [x] Hosted in Vercel at https://xmas-one.vercel.app/
- [x] [DPS](https://nextjs.org/docs/deployment#dps-develop-preview-ship) workflow for development / deployment
- [x] Typescript
- [x] Installable (see [Progressive Web App](https://web.dev/progressive-web-apps/))
- [ ] Cypress.js tested

# Contributing

- Launch dev mode with `yarn dev`
- Submit changes to a PR. Please, use English for the conversation.

# History

- Ran `yarn create next-app` and cleaned up the boilerplate a bit
- Followed the steps in https://nextjs.org/docs/deployment
- Added Typescript to Next.js project following https://nextjs.org/docs/basic-features/typescript - I wonder how optional will TS be and what does _"Next.js strict mode is turned off by default. When you feel comfortable with TypeScript, it's recommended to turn it on in your tsconfig.json"_ mean?
- Added a PWA configuration based on `next-pwa`.
