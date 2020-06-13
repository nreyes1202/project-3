# **Habit Tracker**
 
## “We are what we repeatedly do. Excellence, then, is not an act, but a habit.” -Aristotle
 
###### Welcome to Habit Tracker - the app that helps you build and keep up your habits! Have you been having a tough time with keeping up with your daily routines? Perhaps the quarantine has messed with your days? Have you lost motivation and would like a way to get it back? With the Habit Tracker app, you can input your daily routines to get you back on your daily patterns. You can keep track of making your bed early in the mornings, going on a long walk with your pup in the afternoons, hiking in the lovely mountains of Utah to watch the fiery sunsets in the evenings, and more! With each completed habit, you earn a point. The more habits you complete, the more points you earn.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents
* About This Project
* Tech Used
* Details of App and Challenges
* Link to the Live Project
* Prerequisites

## About this project

###### The database used for this app is MongoDB. When the user enters a new habit, it is displayed in the **Habits** page and is then registered in the database. Upon completing the habit, the user earns a point. The more that the habit is completed, the more points the user earns which are then constantly updated in the database. The **Add a Habit** page allows for habit inputs, and the **Leaderboard** page allows for the full display of habits sorted by most points.

## Tech Used
* React.js
* Bootstrap
* Google Fonts
* Javascript
* Heroku
* CSS
* Mongoose
* MongoDB
* React-Router-Dom
* Axios
* BCryptjs
* Concurrently
* Connect-Mongo
* Express
* Express-Session
* Nodemon
* Passport
* Passport-Local
* Passport-Local-Mongoose

## Details of App and Challenges

A lot of work was put into this APP trying to get pasport to work.  But we ran into conflicts with multipule databases.  The issue of database set up will need to be resolved to move forward with password.

Logic is used to sort the habits list for the leaderboard after the database call.  Using Mongooses instructions did not create a working mongoose call that sorted the Habits.

## Authors

* **Swazey Jessup** - *React Application Building* - [SwazeyJessup](https://github.com/swazeyjessup)
* **Nilsen Reyes** - *React Application Building* - [NReyes1202](https://github.com/nreyes1202)
* **Jean Peel** - *React Application Building* - [JeanPeel](https://github.com/JeanPeel)

## Acknowledgments

### Hat tips to...

* Jacob Stanger -  *Trouble Shooting Help* - [JCStang](https://github.com/jcstang)
* Chris Stead -  *Trouble Shooting Help* - [CMStead](https://github.com/cmstead)

### Thanks go to the Teachers Aids of our bootcamp in helping us trouble shoot the different callenges we faced.

* Kurt Lehnardt -  *Trouble Shooting Help* - [KurtLehnardt](https://github.com/KurtLehnardt)
* Mike Rivera -  *Trouble Shooting Help* - [DevMike42](https://github.com/DevMike42)

See also the list of [contributors](https://github.com/swazeyjessup/project-3/graphs/contributors) who participated in this project.

## Link to the Live Project on Heroku will be posted here after it is hosted...

## Link to GitHub code Repository: https://github.com/swazeyjessup/project-3

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
