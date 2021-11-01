# App Structure
 source
 |--adpaters
    |---xhr
    |---page1Adapter
    |---page2Adapter
 |--components
    |---page1Components
        |--Component1
            |-./index.js
            |-./demo.js
        |--Component2
    |---page2Components
        |--Component1
 |--contexts
 |--pages
 |--styles
 |--.index.js

# Babel
- @babel/preset-env for transpiling ES2015+ syntaxes.
- `@babel/preset-react` for transipling Reat Code.
- [!BrowserList](https://github.com/browserslist/browserslist#queries)
- [!Default Preset](https://babeljs.io/docs/en/babel-preset-env)

# Webpack 5

- **Webpack** A module bundler. But for webpack module is a broad view - CommonJS module, AMD modules, CSS imports, images url, ES modules.
- Ultimate goal of webpack is unify all different sources and modules in a way to import them in javascript code and finally produce a shippable output.

# Things to remember
- **Input Point** A point from where all dependencies of project are collected. From version 4, default is ` src/index.js` but configurable. Can have multiple entry points.
- **Output** A location where resulting javascript files and static files are collected during build process. The resulting filese are part of bundles. From webpack 4, the default output folder is `dist/`
- **Loaders** works at file level, process code to transpile, write templates etc. Loaders work at the individual file level during or before the bundle is generated.
- **Plugins** works at system level, work on file system handeling, patterns etc. Plugins work at bundle or chunk level and usually work at the end of the bundle generation process. Plugins can also modify how the bundles themselves are created. Plugins have more powerful control than loaders.

![IMG](https://i.stack.imgur.com/P7hTM.png)

- **Mode** Development and production. Main difference is minifiction and optimization. 
- **Code Splitting** /lazy loading is used to avoid larger bundles. Developer can decide which block to load when user changes routes or clicks or other events. A splitted code is also called `chunk`.


# Codebase

## webpack-earth valentinog.com 
- Dev Dependencies
    - webpack
    - webpack-cli
    - webpack-dev-server (local server for dev purposes)
    - html-webpack-plugin (`plugin` loads HTML file and inject the bundles in the same file.)
    - style-loader (loading stylesheet in the DOM, inject in DOM) 
    - css-loader (loading CSS file with import)
    - sass-loader (loading SASS file with import)
    - sass (SKIP)
    - babel (modern JavaScript compilation, webpack can work without it but for ES5 conversion, these required!)
    - babel/core (the actual engine)
    - babel/preset/env (modern JS to ES5)
    - @babel/preset-react (for React JS conversions)
    - babel loader (for webpack)
- Code Splitting
    - Avoid big bundles, avoid dependency duplications!
    - Webpack community decided 200KB as maximum size of initial bundle.
    - The cost of JavaScript [https://v8.dev/blog/cost-of-javascript-2019]
    - Three ways to code split
        - **multiple entry points** 
        - **optimization.splitChunks** suppose you are using a library like moment js, `npm i moment` then use it in `index.js` like `import moment from "moment";`, now your bundle size will grow exponentially, the whole library will be bundles into the main entry point of the app. `main.js 250KiB`. With optimization.splitChunks, you can move tout the library from the main bundle. Just add
        ```javascript
            optimization: {
                splitChunks: { chunks: "all" }
            },
        ```
        But dont go for moment, use luxon or date-fns which are better alternatives.
        - **dynamic imports** 

# JavaScript Prep
Array
 |-- Basics(methods, properties etc)
 |-- Problem Solving
Function
 |-- Concepts(arrow/lambda, first class, first order, higher order, pure, currying)
 |-- .
Object
 |-- Basics(methods, properties etc)
 |-- Concepts(deep copy, shallow copy etc)
 |-- Methods(call, apply, bind)
 |-- Problem Solving 
this
 |- Concepts
scope
 |- concept
 |- let,var, const
async
 |- callback
 |- promises
 |- async/await
Proto
 |-- Basics, Concepts
OOP
 |-- Class Syntax


# Layout


 # Links
 - [webpack React toptal](https://www.toptal.com/react/webpack-react-tutorial-pt-1)
 - [2021 React App Scratch Setup](https://michaeldcurry1.medium.com/how-to-setup-a-react-app-from-scratch-in-2021-f787bc5272a0)