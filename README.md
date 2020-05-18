# React App From Scratch with TypeScript
This is a tutorial on how to setup a ReactJS App with Webpack and TypeScrypt.

## Initialize your project
Inside of your project folder, create the **package.json** file.

```bash
yarn init -y
```

## Install ReactJS
Adding React and React-DOM and their declaration files.

```bash
yarn add react react-dom
yarn add @types/react @types/react-dom -D
```

The declaration files, the ones with ***@types/*** prefix, means that TypeScript can understand what is inside the **React** package to provide the correct IntelliSense. Also, these files can be installed as a development dependency.

## Install TypeScript and its Webpack loader
The ts-loader is the TypeScript loader for Webpack.

```bash
yarn add typescript ts-loader -D
```

TypeScript and ts-loader as well can be installed as a development dependency.

## Install Webpack
Webpack will bundle the code into a single .js file.

```bash
yarn add webpack webpack-cli -D
```
Make sure that webpack is installed as a development dependency.

To run webpack use the command:
```bash
yarn webpack --mode development
or
yarn webpack --mode production
```

## Create a TypeScript configuration file
To easily create a TypeScript configuration file you can simply run:

```bash
yarn tsc --init
```

This will create a **tsconfig.json** file which contains all the compilation settings and you can edit however you want.
For more details click [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## Create a Webpack configuration file
Create a **webpack.config.js** file at the root of the project directory.

Make sure to see all the configuration and comments in this file, click [here](https://webpack.js.org/configuration/) to understand it better.

## Install webpack-dev-server
Use Webpack with a development server that provides live reloading.

To install, run the command:
```bash
yarn add webpack-dev-server -D
```
Make sure to add the **contentBase** option on the **webpack.config.js** file.

To run webpack-dev-server use the command:
```bash
yarn webpack-dev-server
```
## Aditional loaders
Let's install **svg** and **file** loaders to handle image imports.

```bash
yarn add file-loader react-svg-loader -D
```

Add them to the webpack configuration.

## Adding Jest to test the application
To install Jest and its declaration files, run the command:

```bash
yarn add jest @types/jest -D
```

To add the TypeScript support, install **ts-jest**.

```bash
yarn add ts-jest -D
```

To easily create a Jest configuration file, run the command:

```bash
yarn jest --init
```

This will create a **jest.config.js** file and you can edit however you want.
For more details click [here](https://jestjs.io/docs/en/configuration).

## Aditional scripts
To facilitate bash commands, add a ***scripts*** section on **package.json** file.

```json
"scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack --mode production",
    "test": "jest"
}
```
