# Sportsee : the sport analytics app

Sportsee is a react app based, it show graphs and stats abouts sport and nutrition.

## Technologies
- JS
- CSS 
- React

## How To Use ?

## Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Install & Run

- Fork the repository
- Clone it on your computer.
- Install all depedencies from api AND sportsee folders (npm i command)

- go to both folder and run
### `npm start`

Runs the app in the development mode.\
Open Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. to view it in your browser.
API will run on  [http://localhost:8080](http://localhost:8080) .

## Endpoints

###  Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:8080/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:8080/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:8080/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:8080/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

###  Examples of queries

- `http://localhost:8080/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:8080/user/18` - Retrieves user 18's main information.

## Authors

Openclassrooms & Jordan descharles
