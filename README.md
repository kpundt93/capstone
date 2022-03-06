# My Recipes

#### By: _**Katie Pundt**_

#### _Brief description._

## Technologies Used
- HTML
- CSS
- JavaScript
- React
- React-Bootstrap
- JSX
- Firebase/Firestore
- npm
- git
- GitHub

## Description


## Setup/Installation Requirements
- Open the terminal on your desktop
- Once in the terminal, use it to navigate to your desktop folder
- Once inside your desktop folder, use the command `git clone https://github.com/kpundt93/capstone.git`
- After cloning the project, navigate into it using the command `cd capstone/my-recipes`
- Use the command `git remote` to confirm the creation of the new local repository
- Install project dependencies by running the command `npm install`
- If you receive errors in the terminal, try running `npm install` again, sometimes npm can be finicky
- Then run the command `npm run start` to start the project server and view the application (use ctrl + c to exit the server in the terminal)
- Open the project with the code editor of your choice

## Component Diagram
![Component Diagram](component-diagram.drawio.png)

## Research & Planning Log
<details>
<summary>Friday, 02/18/22</summary>

* 8:30 - fill out project proposal
* 9:15 - meet with another student working on similar project to bounce ideas off of(databases, uploading images)
* 9:45 - start looking for C#/React web app tutorials
* 10:15 - watch 1 hour C#/React tutorial and build practice project with it (https://www.youtube.com/watch?v=ON-Z1iD6Y-c)
* 11:45 - research Firebase/Firestore and React, review docs, go down the YouTube rabbit hole
* 12:45 - scrap earlier C#/MySQL plan and revise capstone proposal to use Firebase/Firestore instead
* 1:00 - watch React & Firebase tutorial (https://www.youtube.com/watch?v=jCY6DH8F4oc&t=109s)
* 2:30 - watch Firebase Auth tutorial playlist and code along with videos (https://www.youtube.com/playlist?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ)
* 3:30 - stopped watching above playlist, it's a little outdated
* 3:35 - start watching React Auth with Firebase video (https://www.youtube.com/watch?v=PKwu15ldZ7k)
* 4:30 - start working through Firebase lessons on Learn How To Program

* Total hours: 7.5
</details>

<details>
<summary>Friday, 02/25/22</summary>

* 8:15-8:30 - make a plan for today's work
* 8:30-9:40 - re-read Epicodus materials on Redux, trying to determine the best way to manage state in my app
* 9:40-11:00 - review materials on React Hooks, research using useState hook
* 11:00-11:20 - decided to use combination of Redux and the useState hook, looking for code examples of implementing both
* 11:20-11:30 - break
* 11:30-12:25 - watch video on React Redux with hooks (https://www.youtube.com/watch?v=9jULHSe41ls)
* 12:30-1:30 - lunch break
* 1:40-3:15 create component diagram (this took much longer than expected, I had to really think about how to divide up all of my app components)
* 3:15-3:30 - break
* 3:30-4:00 - research best practices for ingredient & measurement entry, start thinking about how my forms will look
* 4:00-5:00 - read React-Bootstrap documentation on forms, test out ideas on their in browser editor

* Note to future Katie: solve the ingredient form issue by using React-Bootstrap elements (specifically an InputGroup with multiple FormControl elements and a DropdownButton) and an "Add" button for each ingredient entry.

* Daily hours: 6.9
* Total hours: 14.4
</details>

<details>
<summary>Saturday, 02/26/22</summary>

* 10:20-10:50 - dig into Firestore documentation to better understand collections and documents
* 10:50-11:25 - watch videos linked in Firestore docs (https://www.youtube.com/watch?v=o7d5Zeic63s) and (https://www.youtube.com/watch?v=haMOUb3KVSo)
* 11:30-12:30 - create test Firestore db to mess with different database structures (I think I'll use a map to store each ingredient, the quantity of that ingredient, and the measurement)

* Daily hours: 2.1
* Total hours: 16.5

</details>


## Getting Started with Create React App
<details>
<summary>Getting Started with Create React App</summary>

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
</details>