

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

#### Synchronize Database Schema

Set up the initial schema.

```powershell
npx mikro-orm schema:create -r
```

<!-- #### Seed the Database (Optional)

Seed your database with initial data, if required.

```powershell
npx mikro-orm seeder:run
``` -->



Start the backend service in development mode.

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
```

