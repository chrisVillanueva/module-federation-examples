# wmf-react-case-study

Webpack Module Federation: A React Case Study.

## project directory



## core-libs

The low-level container for cross-app dependencies.  Exposes core libraries, such as `react`, `react-dom`. This is a **pure `remote`** dependency.


## design-system



It is a middle-level app, which depends on modules exposed from `core-libs` : `react` ,`react-dom`. In the meantime, it also exposes components: `Dialog`, `Button` to another app called `main-app`.

** It is both host and remote. **

## main-app

the top-level app, which depends on `core-libs` and `component-app`.

It is a pure host.

# how to use

- `npm install`
- `npx lerna bootstrap`
- `npm run start`

after all the commands done, open your browser at `http://localhost:3002`, open the dev-tool's network tab to see resources loading details
