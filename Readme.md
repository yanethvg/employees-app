# Backend Technical Test 

## Features

- Auth module for authenticate using JWT as Header and cookies
- Employee module (create, read, delete, update)
- Areas module (read) and SubAreas (read)

Documentation: [Endpoints documentation](https://documenter.getpostman.com/view/7984452/VVBXwR2F)



## Installation

Backend API requires [Node.js](https://nodejs.org/) v10+ to run.


Fill the ```.env``` file with the data required ```cp .env.example .env```
Run ```docker-compose up -d``` to create the database 
Run ```npm i``` to install all dependencies
Run ```npx sequelize-cli db:migrate``` to migrate sequelize migrations
Run ```npx sequelize-cli db:seed:all``` to seed test data to database
Run ```npm run dev``` to start listening the application

Run tests using ```npm run test``` 
Run coverage test ```npm run coverage```


### Recomended ```.env``` Content
```
POSTGRES_DB=employees_webhelp
POSTGRES_USER=admin
POSTGRES_PASSWORD=secret
DB_HOST=localhost
DB_DIALECT=postgres
AUTH_SECRET=jwttoken
AUTH_EXPIRES=24h
AUTH_ROUNDS=10
PORT=3000
```
