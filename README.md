This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Twitter Clone

From https://www.youtube.com/watch?v=rJjaqSTzOxI

## Technologies used

ReactJs
firebase for database and hosting (firestore=realtime firestore database to store comments)
material ui = icone and design
react flip move for animations
css3 variables

## Steps

npx create-react-app twitter-clone

cd twitter-clone
npm start

use CSS BEM convention (check http://getbem.com/naming/)

twitter is split in 3 main components (sidebar, feeds, widget)

for the sidebar we need icons with materialUI
https://material-ui.com/

install twitter features such as 
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed with
npm i react-twitter-embed

install firebase for backend with
npm i firebase
firebase login

install flip-move for a smooth animation when tweet with 
npm i react-flip-move

to deploy firebase with following command in console
firebase init
yes to proceed
? Hosting: Configure and deploy Firebase Hosting sites
? Use an existing project
? twitter-clone-4fb96 (twitter-clone)
? What do you want to use as your public directory? build
? Configure as a single-page app ? Yes

clean and create the version to deploy with
npm run build
after any update, run the command again and deploy with
firebase deploy

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
