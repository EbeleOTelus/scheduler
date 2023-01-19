# Interview Scheduler
The interviewer scheduler is a single page app that allows users to edit, cancel and book interviews.it tracks student interviews from Monday to Friday. This App uses React and data is collected by the API server using a PostgresSQL database.For full functionality the client and API server must run concurrently.
 

## Getting started
- Click [here](https://github.com/lighthouse-labs/scheduler-api) to connect to the scheduler-api and follow the steps outlined in the README.
- Fork and lone your repository onto your local device.
- Install dependencies using the npm install command.
- Follow the README instructions from the scheduler API, and start it using the npm start command.
- Start the web server using the npm start command. The app will be served at http://localhost:8080/.


## Screen Shots
![Scheduler Page](https://github.com/eby84/scheduler/blob/master/docs/Scheduler-page.PNG?raw=true)
This screen shots shows already booked appointments.

![Create new appointment](https://github.com/eby84/scheduler/blob/master/docs/Scheduler-form.PNG?raw=true)
Here we have the form that is used to create new appointments.

![Error Page](https://github.com/eby84/scheduler/blob/master/docs/Scheduler-error.PNG?raw=true)
This shows the error page if there is an issue booking an appointment.

## Dependencies
- React
- Node.js
- Axios
- Cypress
- Jest

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
