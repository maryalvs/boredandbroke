# create-react-app-fullstack
<br/>

<div align="center">
	<img width="500" src="https://github.com/ekatzenstein/create-react-app-fullstack/blob/master/homepage.png?raw=true" alt="chalk">
</div>

## The Stack

* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Node](https://nodejs.org/en/)/[Express.js](https://expressjs.com/)
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [React-Router](https://github.com/acdlite/react-router)


## Versions

<h3>3.0.0</h3>

* Removed Eject! Using a proxy server doesn't require eject, so your boilerplate config remains nicely under the hood.


<h3>2.0.0</h3>

* Substantial updates and new architecture
* Removed different start options (backstart, fullstart, etc).  Fullstack functionality is now present in `npm run start`. Used a 'proxy' instead of middleware to the Webpack Dev Server. Reload times are substantially faster.
* Added [redux](https://www.npmjs.com/package/redux), including [react-redux](https://www.npmjs.com/package/react-redux), [redux-thunk](https://www.npmjs.com/package/redux-thunk), [redux-logger](https://www.npmjs.com/package/redux-logger), and [react-router-redux](https://www.npmjs.com/package/react-router-redux).
* Added [axios](https://www.npmjs.com/package/axios).

<h3>1.5.0</h3>
Update with create-react-app changes (v 1.3.0), updated to work with new react-router (version 4.1.0), switched back to browserHistory
<h3>1.4.0</h3>
Bug fixes
<h3>1.3.0</h3>
Switched from "browserHistory" to "hashHistory" for React Router. React Router was conflicting with Express in the dev environment. You can change to browserHistory prior to a build.
<h3>1.2.0</h3>
Added 'backstart' functionality <br/>
<h3>1.1.0</h3>
Eject Prompts <br/>
<h3>1.0.0</h3>
Initial release <br/>

<br/>

## Installation
<br/>

```
npm i -g create-react-app
npm i -g create-react-app-fullstack
```

<br/>

## Getting Started
<br/>
This is designed for ground up full-stack development. Start by creating your database with PostgreSQL (you can do this after running 'fullstack' as well):<br/>

```
createdb <my-app>
```  

After creating your database, initialize a create-react-app with the same name (the name match is default functionality, overriding this is straightforward):<br/>

```
create-react-app <my-app>
cd <my-app>
fullstack
```

After running *fullstack*, confirm that you want to eject and the remaining steps will update your app with Express and Sequelize.

The second prompt confirms that you want to run *fullstack* on your project. The process will add/overwrite/remove files in your *src*, *db*, *server*, and *scripts* folders, so this prompt is a security net. Since you're likely running this function at the beginning of a project, it shouldn't be an issue. After accepting the prompt, the project will install dependencies and template files.

#### remember to seed the database!

After the *fullstack* completes, run the command below to add dummy data to the database: `npm run seed`

<br/>

## Commands

### seed

Before getting started, seed the database with dummy data by running:

```
npm run seed
```

<br/>

### start

After the database is seeded, you should be all set. To enable full-stack development with hot-reloading, use the same script as create-react-app:

```
npm run start
```


<br/>

### build

To build deployment-ready, we use the same script as create-react-app:

```
npm run build
```

<br/>

## References and Props
<br/>
Much of this work was inspired and built from the resources below:

* [create-react-app](https://www.npmjs.com/package/create-react-app)
* [create-react-app-add-redux](https://www.npmjs.com/package/create-react-app-add-redux)
* [custom-react-scripts](https://www.npmjs.com/package/custom-react-scripts)
* [Using create-react-app with React Router + Express.js](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
* [How to get "create-react-app" to work with your API](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)
* [Bones](https://github.com/queerviolet/bones)

Last, this project was built at a hackathon at [Full Stack Academy](https://www.fullstackacademy.com/). Development is ongoing.
