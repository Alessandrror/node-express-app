# Backend Application

## Description

This register/login application was builded using JavaScript as a language with NodeJS as an execution environment and its framework ExpressJS.

## Requirements

As requirements you must have installed Node with NPM.
Also mongo is a required to create the database with this configuration.

## Configuration

To configure the project you can find everything in the file called `config.js` at the `src` folder.

You must add two variables. The first variable is the secret key to use in the bcrypt method called `TOKEN_SECRET_KEY` to encrypt the password and the second variable is the url to connect data base called `URL_DB_CONNECTION`. Don't forget to install mongo and start the connection to create automatically the database.

The current port is set to 3000 but you can change it in the config.js file just look for the variable `SERVER_PORT`.

## Installation

Commands:

To install the package.json with all the dependencies.
```
npm install
```

To initialize the server

```
npm run dev
```

## Dependencies

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Version</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>express</td>
            <td>4.18.2</td>
        </tr>
        <tr>
            <td>mongoose</td>
            <td>7.4.2</td>
        </tr>
        <tr>
            <td>morgan</td>
            <td>1.10.0</td>
        </tr>
        <tr>
            <td>jsonwebtoken</td>
            <td>9.0.1</td>
        </tr>
        <tr>
            <td>cookie-parser</td>
            <td>1.4.6</td>
        </tr>
        <tr>
            <td>bcryptjs</td>
            <td>2.4.3</td>
        </tr>
    </tbody>
</table>
