# Adminer MongoDB Playground

This is a database dev environment using [docker](https://docs.docker.com/install/). I use it to make schemas, test SQL commands, and for development databases.

Pull up a local MongoDB database using docker.

- `docker-compose up` to start postgres + adminer via Docker
- `docker-compose stop && docker-compose rm` to delete the containers

Access adminer at [http://localhost:5401/y](http://localhost:5401/)

If you are prompted to login make sure to set the following fields:
- System: `MongoDB`
- Server: `mongoDev` (`mongoProd` for production)
- Username: `admin`
- Password: `admin`
- Database: `my-retail-db`

## Init Script

On start up the init-mongo.js script will be executed. Right now this adds a user with role "readWrite". You can use this script to create and populate collections on startup.

## Application Examples

- [My Retail](https://github.com/nicklpeterson/myRetail): an example using this database set up with a Spring Boot API.

- [Sprint Planner](https://github.com/nicklpeterson/SprintPlanner): this is a very similar set up using a Postgres database instead of MongoDB.
