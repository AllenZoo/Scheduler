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

- Using Node.js and connecting to a database.
- Cool CSS styling with React (navbar) :)
- Using React Routers to navigate between pages.

### Continued development

- Currently working on implementing Goals page.
- Working on improving algorithm for generating schedule.

### Useful resources

- A lot of stuff from Stack Overflow.

## How to run Scheduler
Install the following (if you haven't already):
- [Node js](https://nodejs.org/en/download/)
- [mySQL server](https://dev.mysql.com/downloads/mysql/)
- [mySQL GUI](https://codingsight.com/10-best-mysql-gui-tools/) -choose from the list (I use [mySQL workbench](https://dev.mysql.com/downloads/workbench/))

Run the following in project terminal to install some dependencies:

- npm install cors
- npm install axios
- npm i lodash
- npm install react-router
- and more if prompted by terminal.

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


