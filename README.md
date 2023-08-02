# ARTEMIS

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the web application](#running-the-web-application)
  - [Running tests](#running-test)
  - [Running Docker](#run-docker)
- [Rest API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

ARTEMIS

This is a web application that helps users to track rocket launch dates 

- Frontend: ReactJS
- Backend: NodeJS & RestAPI & Expressjs
- Testing: Jest, React testing library, Supertest & MSW


## Features

## Getting Started

To run this web application on your local machine, follow the steps below:

### Prerequisites

Before getting started, ensure that you have the following software installed on your machine:

- Node.js: Download and install Node.js from the official website: https://nodejs.org


### Installation

Step-by-step guide on how to install the project and its dependencies.

1. Clone the repository to your local machine using Git:


2. Navigate to the project directory

```bash
cd artemis
```

3. Install the project dependencies using NPM(Node Package Manager):

```bash
npm install
```

4. Navigate to the directory of the react-frontend and express-backend as shown below and install corresponding dependencies

```bash
cd  artemis/client
```

```bash
npm install
```

```bash
cd  artemis/server
```

```bash
npm install
```

### Running the web application

Once you have installed the dependencies, you can start the web application (Frontend and Backend concurrently) using

```bash
cd  artemis
```

```bash
npm run start:both
```

### Running Tests

Once you have installed the dependencies, you can run test within the react-frontend and express-backend directory

- react-frontend

```bash
cd packages
```

```bash
cd react-frontend
```

```bash
npm run test
```

```bash
press a to run all tests
```

- run test express-backend

```bash
cd packages
cd express-backend
npm run test
```

### Run docker

navigate to the root directory

```bash
cd my-news-app
docker-compose up

```

To stop the containers

```bash
docker-compose stop
```

### API documentation

Access API documentation via Swagger UI using the link below after starting up the application

```bash
http://localhost:3001/api-docs/#/default/get_api_articles
```

### Usage

- Accessing the homepage: Open your web browser and navigate to http://localhost:3000 to view the homepage.

- Using the API: Refer to the Swagger API documentation at http://localhost:3001/api-docs for a detailed list of available endpoints and how to interact with them.

- Troubleshooting
  If you encounter any issues or have questions, please feel free to reach out to us by creating an issue on our GitHub repository: https://github.com/ayofalo/my-news-app/issues.

### License

This project is licensed under the MIT License.

### Authors

Contributors names and contact info

Ayo Folami
