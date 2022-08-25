### What are we building?

https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/

You have probably heard of ReactJS. If you know reactJS, you likely know what create-react-app is: create-react-app is a CLI tool for setting up or bootstrapping a boilerplate dev setup to make React applications.

Today we will be creating a simple React application but without using the create-react-app CLI.

### Installation Phase

$ npm init

for creating a simple React application, we need two main libraries: React and ReactDOM. So let’s get them added as dependencies into our application using npm.

$ npm i react react-dom --save
Next up we need to add webpack, so we can bundle our app together. Not only bundle, but we will also require hot reloading which is possible using the webpack dev server.

$ npm i webpack webpack-dev-server webpack-cli --save--dev

keep in mind that React uses ES6 classes and import statements, something that all the browsers may not be able to understand. To make sure that the code is readable by all browsers, we need a tool like babel to transpile our code to normal readable code for browsers.

$ npm i babel-core babel-loader @babel/preset-react     @babel/preset-env html-webpack-plugin --save-dev

That was all for installation (In the case of babel, we have loaded the core babel library first, then the loader, and finally 2 plugins or presets to work specifically with React and all the new ES2015 and ES6 onwards code.).

### Code

Let’s start by adding a webpack.config.js file in the root of our application structure

The last thing we need to do is create a .babelrc file to use the babel preset we installed and take care of the ES6 classes and import statements in our code.