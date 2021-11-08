# bearer-auth

# basic-auth

### Author : Nashat Alzaatreh

## install

1. copy the link of the repo
1. clone the repo on your local machine by `git clone repo-url`
1. download independencies by `npm i`
1. create a `.env`, then cope the content of `.env.sample` file inside the `.env` file.
1. fill the variables of `.env`
1. run the app

## Deploy, Run and Test

- [test report](https://github.com/NashatAlzaatreh/bearer-auth/actions)
- [deployed link](https://nashat-bearer-auth.herokuapp.com/)
- [Pull Request](https://github.com/NashatAlzaatreh/bearer-auth/pull/1)

### Setup

#### `.env` requirement

- `PORT` - port number
- `SECRET` - a random string
- `DATABASE_URL`: postgres://localhost:5432/`databaseName`

#### Running the app

- either:
  1. `npm start`
  1. `npm run watch` (nodemon)
- Endpoints: `/signup`
- Endpoint: `/signin`

#### Test

- Unit test: `npm run test`

### UML:

![uml](./bearer-auth.jpg)
