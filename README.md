# Server 1.0.0

This is version 1.0.0 of the server, a Node.js application designed for handling server-side operations. It utilizes various packages to enhance its functionality.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Description

This server is built using Node.js and incorporates several npm packages to facilitate common server functionalities. It is structured as a module and includes features such as CORS support, environment variable management, an Express web server, date/time handling with Moment.js, and MongoDB integration through Mongoose.

## Features

- **CORS Support:** Utilizes the `cors` package to enable Cross-Origin Resource Sharing.
- **Environment Variables:** Manages environment variables using the `dotenv` package.
- **Express Web Server:** Implements an HTTP server with the `express` package.
- **Date/Time Handling:** Utilizes the `moment` package for effective date and time manipulation.
- **MongoDB Integration:** Connects to MongoDB using the `mongoose` package.
- **Development Workflow:** Enhances development experience with automatic server restarts using `nodemon`.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Usage

After installation, the server can be started using the following commands:

- For production: `npm start`
- For development with automatic restarts: `npm run dev`

Make sure to set up your environment variables using a `.env` file and provoide MONGODB URL in `.env` file
 and give `MONGODB_URL` as variable name for MONGODB URL

`I have also send .env file` for reference,if you guys needed in case of trouble that's why i have not added in .`gitignore` file

## Scripts

- `npm start`: Start the server in production mode.
- `npm run dev`: Start the server in development mode with automatic restarts.

## Dependencies

- **cors:** ^2.8.5
- **dotenv:** ^16.3.1
- **express:** ^4.18.2
- **moment:** ^2.29.4
- **mongoose:** ^8.0.1
- **nodemon:** ^3.0.1


