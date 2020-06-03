# DEMO Streaming App

A demo project done for Remote Roofing, the project consists of 3 pages namely home, series and movies.

URL - https://elizabethvincentm.github.io/remote-roofing-test

## Technical and architectural choices:

### Why React?

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) because the UI framework is really robust, fast and secure. It is also a very popular framework which has a lot of community support and has many ready to use solutions available which makes the development time shorter.

### Why Tailwindcss

Project uses tailwindcss as the CSS utility. Having functional css to work with makes creating composable components a breeze.
There are a lot of utility classes and other configurable plugins which helps in building styles.

## Are there any improvements you could make to your submission?

- Add animations
- Work on a better UI design
- Add filter and sort options

## What would you do differently if you were allocated more time?

I would try to come up with a better UX and Visual design. Also I would have loved to integrate authentication layer.

#### HomePage

- Consists of links to series and movies pages.
- Mock buttons are provided for 'login' and 'Start your free trial'.
- Some of the programs are highlighted as well

#### Series Page

- Displays 21 entries with programType-series, with release year >=2010 and sorted alphanumerically

#### Movies Page

- Displays 21 entries with programType-movie, with release year >=2010 and sorted alphanumerically

## Data Flow

DEMO Streaming App
↳ https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds and deploys the app to github-pages and updates the `dist` folder.

### `npm run test-coverage`

Launches the test runner in the interactive watch mode.<br />
Code coverage reports are generated afterwards.
