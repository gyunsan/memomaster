# Welcome to the React App with Server!

This is a simple full-stack application built using React for the frontend, Express for the backend, and PostgreSQL as the database. The application includes user authentication and CRUD (Create, Read, Update, Delete) operations for managing resources in the database.

## Prerequisites

* [Node.js](https://nodejs.org/) installed
* [NPM](https://www.npmjs.com/) installed
* [PostgreSQL](https://www.postgresql.org/) installed

## Getting Started

1. **Clone** this repository: `git clone [https://github.com/<username>/react-app-server.git](https://github.com/gyunsan/memomaster.git)`
2. **Install Dependencies**: `npm install`
3. **Create a New Database** in PostgreSQL and update the connection string in `config/dbConfig.js`.
4. **Run Migrations** to create tables: `npx sequelize db:migrate`
5. **Seed Sample Data** (optional): `npx sequelize db:seed:all`
6. **Start the Application**: `npm start`
7. Open your browser and navigate to [`http://localhost:3000`](http://localhost:3000).
8. **Start the Server**: `npm start`
9. Open your browser and navigate to [`http://localhost:8000`](http://localhost:8000).

## Backend API Endpoints

The following endpoints are available at [`http://localhost:8000`](http://localhost:8000):

#### User Authentication ####

| Method   | Route                     | Description           |
| :------: | :------------------------ | :------------------ |
|  POST    | `/api/users/signup`     | Register a new user  |
|  POST    | `/api/users/login`        | Log in an existing user |

#### Resource Management ####

| Method   | Route                       | Description         | Requires Auth? |
| :------: | :-------------------------- | :------------------ | :-----------: |
|  GET    | `/todos/`            | Get all notes   |      Yes       |
|  GET    | `/todos/:userEmail`        | Get a single note by user email |   Yes          |
|  POST   | `/api/todos`            | Creates a new Todo item with a generated UUID identifier and saves it into the database.  |    Yes        |
|  PUT    | `/api/todos/:id`        | Edit an existing note by UUID  |   Yes          |
|  DELETE | `/api/todos/:id`        | Remove a note by UUID |   Yes          |

## Testing

To test the application, you can use tools like [Jest](https://jestjs.io/) or [Mocha](https://mochajs.org/) for unit testing, and [Cypress](https://www.cypress.io/) or [Selenium](https://www.selenium.dev/) for end-to-end testing. To set up testing, make sure to install any necessary packages such as `jest`, `supertest`, etc., and configure them accordingly. You may also want to write tests for each endpoint described above.

## Deployment

To deploy the application, consider using services like [Heroku](https://heroku.com/) for hosting the backend, and [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) for hosting the frontend. Make sure to follow their respective deployment instructions to ensure successful setup. Additionally, remember to secure sensitive information such as credentials before pushing code to production.
