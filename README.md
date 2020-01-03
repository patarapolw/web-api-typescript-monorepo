# web-api-typescript-monorepo

Web + API + server + TypeScript + ESLint + [Yarn](https://yarnpkg.com/) monorepo

I use [Parcel](https://parceljs.org/), [rest.ts](https://github.com/hmil/rest.ts), [Express.js](https://expressjs.com/) and [Yarn](https://yarnpkg.com/) in this example, but you can easily use

- Any kind of Node.js web servers, as it might be faster or easier than Express.js
- React/Vue/Angular/Svelte/Webpack CLI as you need, instead Parcel
- [RESTyped](https://github.com/rawrmaan/restyped), instead of rest.ts
- NPM instead of Yarn, but the concept of Workspaces might be different; however, Lerna does enable Workspace in NPM.

## Publishing

For `/packages/web/package.json`, don't forget to move all dependencies to `"devDependencies"`, or at least, something other than `"dependencies"`.
