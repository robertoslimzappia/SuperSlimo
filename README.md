# SuperSlimo

The current repo is a teaching project used for learning TypeScript on a [YouTube](https://www.youtube.com/playlist?list=PLJ68Z4LxQqwSMs0Z-iVomFlxLcoG5mMmZ) series.
It can also be used as a template for TypeScript projects as it include templates for ESLint, EditorConfig, and Webpack.

## Why TypeScript?

[`TypeScript`](https://www.typescriptlang.org/) is a statically typed superset of JavaScript that compiles to plain JavaScript. It offers type-checking during development, which can catch potential bugs before runtime. TypeScript also provides [advanced autocompletion](https://en.wikipedia.org/wiki/Intelligent_code_completion), [navigation](https://code.visualstudio.com/docs/editor/editingevolved), and [refactoring](https://code.visualstudio.com/docs/editor/refactoring) capabilities that can make your code more robust and maintainable.

## What is ESLint and why use it?

[`ESLint`](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It helps maintain code quality and adhere to coding conventions. In this project, we use the `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to lint TypeScript code specifically. The configuration can be found in [`.eslintrc.js`](.eslintrc.js).

## What is EditorConfig and why use it?

[`EditorConfig`](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. It's a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. In this project, the [`.editorconfig`](.editorconfig) file defines our coding style. This file is configured to use spaces for indentation, with an indent size of 4, and to trim trailing whitespaces.

## What is Webpack and why use it?

[`Webpack`](https://webpack.js.org/) is a static module bundler for modern JavaScript applications. It builds a dependency graph that includes every module your application needs, then packages all of those modules into one or more bundles. In this project, we use Webpack to bundle our TypeScript code, with the configuration found in [`webpack.config.js`](webpack.config.js).

## Current Configuration and Used Plugins

- TypeScript is configured via [`tsconfig.json`](tsconfig.json). It's set to target ES2016 and use CommonJS modules. The source code is in the [`src`](src) directory, and the compiled output goes to the `dist` directory.

- ESLint is configured to extend the 'eslint:strict' and 'plugin:@typescript-eslint/strict-type-checked' rulesets. It uses the '@typescript-eslint/parser' and ignores all `.js` files.

- Webpack is configured to use 'ts-loader' for handling `.ts` and `.tsx` files. It also handles `.png` assets. The `ESLintPlugin` is used for linting during the build process, and `HtmlWebpackPlugin` is used for generating the HTML file for the application.

---

## Pixi.js and Matter.js in Our Project

In this project, we use `Pixi.js` for rendering and `Matter.js` for physics.
Here's a brief overview of these libraries:

### Pixi.js

[`Pixi.js`](https://pixijs.com/) is a powerful, flexible, and fast 2D rendering library for the web. It provides a simple API for building complex, interactive graphics and animations. In our project, we use Pixi.js to handle all the rendering tasks.

### Matter.js

[`Matter.js`](https://brm.io/matter-js/) is a 2D physics engine for the web. It provides the tools to simulate physical systems, like gravity, collision, and user input. In our project, we use Matter.js to handle all the physics simulations.

## Test the Game

This project is configured to interact with Visual Studio Code (VSCode) through several configuration files located in the [`.vscode`](.vscode) directory:

1. `launch.json`: This file configures the debugging settings for VSCode. It's set up to launch Chrome against localhost (http://localhost:8080) for debugging. Before launching, it runs the `npm: dev-serve` task defined in `tasks.json`.

2. `settings.json`: This file contains settings that are specific to this workspace. It's currently set up to use the TypeScript version installed in the project's [`node_modules`](node_modules) directory.

3. `tasks.json`: This file defines tasks that can be run from within VSCode. There are tasks for development build (`npm: dev-build`) and development serve (`npm: dev-serve`). The `npm: dev-serve` task is configured to run in the background and has a problem matcher set up to report TypeScript compilation errors in the Problems pane of VSCode. There's also a task to terminate all running tasks.

## How to start

1. Clone the repository: `git clone https://github.com/robertoslimzappia/SuperSlimo.git`
2. Navigate into the project directory: `cd SuperSlimo`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev-serve`
5. Open your browser and navigate to `http://localhost:8080`

You should now see the game running in your browser. Try interacting with the game objects and observe the physics simulations in action.
