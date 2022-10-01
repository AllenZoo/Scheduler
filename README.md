## Scheduler

A SPA targetting those who want a little switch up to their monotonous schedules by letting RNG decide their fate for the day.





## Table of contents

- [Overview](#overview)
  - [Functionality](#functionality)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Installation](#how-to-run-scheduler)
- [Author](#author)

## Overview

### Functionality

Functionalities include: 
* A weekly schedule generator.
* Plan for the day display based off generated schedule.
* Goals for hour tracking (WIP)
* Time commitment lists used for generating schedules.
* Checklist to keep track of tasks.
* Saving and loading from a  local database.

### Screenshots

![alt text](https://github.com/AllenZoo/Scheduler/blob/master/screenshots/screenshot1.PNG)
###
![alt text](https://github.com/AllenZoo/Scheduler/blob/master/screenshots/screenshot2.PNG)
###
![alt text](https://github.com/AllenZoo/Scheduler/blob/master/screenshots/screenshot3.PNG)
###
![alt text](https://github.com/AllenZoo/Scheduler/blob/master/screenshots/screenshot5.PNG)
###
![alt text](https://github.com/AllenZoo/Scheduler/blob/master/screenshots/screenshot6.PNG)
###
![alt text](https://github.com/AllenZoo/Scheduler/blob/master/screenshots/screenshot7.PNG)


### Links
- Live Site URL: [Scheduler](https://allenzoo.github.io/Scheduler/)


## My process

### Built with

Front-end: HTML, CSS, JavaScript, React.js.
Back-end: Node.js Express framework, MySQL database.

### What I learned

### Continued development

### Useful resources

## How to run Scheduler
Install the following (if you haven't already):
- [Node js](https://nodejs.org/en/download/)
- [mySQL server](https://dev.mysql.com/downloads/mysql/)
- [mySQL GUI](https://codingsight.com/10-best-mysql-gui-tools/) -choose from the list (I use [mySQL workbench](https://dev.mysql.com/downloads/workbench/))


1. To start the app, access the project root directory (eg. ../../Scheduler) with the terminal and run the following:

- npm start

2. To start up express server, access the server file (eg. ../../Scheduler/server) and run the following:

- node server.js

3. To enable saving and loading into a databse, install a mySQL database server and GUI, and edit properties as necessary under server.js files:

```js
/* Examples */
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678",
  database: "scheduler",
});
```

4. Create a table in your mySQL GUI.

For reference: 

![alt text](https://github.com/AllenZoo/Scheduler/blob/master/screenshots/Table.PNG)

To create a unique key (for user) reference [this](https://stackoverflow.com/questions/11376413/creating-unique-constraint-on-multiple-columns-in-mysql-workbench-eer-diagram) if you're using mySQL workbench. Otherwise google: "how to make unique key mysql".

5. Change table name variable in server.js
```js
/* CHANGE THIS TO MATCH YOUR TABLE NAME*/
let table = "schedules";

/* For reference to find table variable above */
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678",
  database: "scheduler",
});
```

## Author

[@AllenZoo](https://github.com/AllenZoo)










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
