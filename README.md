

# Electric Car Charging Finder App

## Prerequisites

- Docker Desktop for Windows
- Node.js (Version 20.7.0 or higher)

## Overview

The Electric Car Charging Finder App helps users find the closest charging stations or other users with electric cars that they have registered. This feature is particularly useful for electric car owners looking for the nearest available charging option.

## Backend & Database Setup

### Database

- **Database System**: PostgreSQL
- **ORM**: [MikroORM](https://mikro-orm.io/docs/)

### Setup Instructions

#### Navigate to the Backend Directory

Change your current working directory to the backend service directory.

```powershell
cd .\electric-car-station\
```

#### Start the Database Container

Ensure Docker Desktop is running, then start the PostgreSQL database container.

```powershell
docker-compose up -d
```

#### Install Node Modules

Install the project's Node.js dependencies.

```powershell
npm install
```

#### Start the Backend Service in Development Mode

Before synchronizing the database schema, start the backend service to compile TypeScript files to JavaScript.

```powershell
npm run start:dev
```

Now, stop the development server by pressing Ctrl + C in your terminal. This step is necessary to ensure that the TypeScript files are compiled, making the schema creation process possible.

#### Synchronize Database Schema

With the TypeScript compilation done, set up the initial schema.

```powershell
npx mikro-orm schema:create -r
```

<!-- #### Seed the Database (Optional)

Seed your database with initial data, if required.

```powershell
npx mikro-orm seeder:run
``` -->


#### Restart the Backend Service

After setting up the database schema, restart the backend service in development mode for your changes to take effect.

```powershell
npm run start:dev
```

### Example Usage

To find the closest charging stations or users with electric cars, make a GET request to the `/charge-finder/closest` endpoint with the `latitude`, `longitude`, and `amount` query parameters:

```url
http://localhost:3000/charge-finder/closest?latitude=41&longitude=0&amount=2
```

Example response:

```json
[
    {
        "id": "2",
        "name": "pepito",
        "latitude": 41,
        "longitude": 0,
        "distance": 0
    },
    {
        "id": "216699",
        "name": "Renault Automóviles Alcañiz",
        "latitude": 41.04001699636177,
        "longitude": -0.1261907135128979,
        "distance": 11.483804377587322
    }
]
```

This response indicates the closest available charging options based on the provided location, including both charging stations and registered users with electric cars.



## Frontend Setup
The frontend of the Electric Car Charging Finder App is built with Vue 3.



First, navigate to the Frontend Directory.

```cd .\electric-car-station\frontend```

#### Change your current working directory to the frontend service directory.

Install the project's Node.js dependencies for the frontend.

```npm install```



#### Start the Development Server

Start the Vue development server. This will compile the frontend and serve it.

```npm run serve```

Open your browser and go to http://localhost:8080 to view the frontend application.

## Additional Commands

### Running Tests

Launch the test runner in interactive watch mode.

```powershell
npm test
```

### Building for Production

Compile the app for production into the `build` folder.

```powershell
npm run build
```

