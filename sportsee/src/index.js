import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import propTypes from 'prop-types';

const userId = "12";
axios.defaults.baseURL = 'http://localhost:8080';

/**
 * @description async to wait for API response before loading page
 * * This first endpoint includes the user id, user information.
      USER_MAIN_DATA contains first name, last name and age, day score, calorie & macronutrients data
      USER_ACTIVITY contains user's daily activity with kilograms and calories
      USER_AVERAGE_SESSIONS contains user's daily sessions / week 
      USER_PERFORMANCE contains user's average performance with 6 points (cardio, energy,strength ...)
     * @param {number} id   As an integer 12 or 18 for tests
 */

const sendGetRequest = async () => {
  try {

    const MAIN_DATA = await axios.get(`user/${userId}`);
    const USER_MAIN_DATA = MAIN_DATA.data;

    const ACTIVITY = await axios.get(`user/${userId}/activity`);
    const USER_ACTIVITY = ACTIVITY.data;

    const AVERAGE_SESSIONS = await axios.get(`user/${userId}/average-sessions`);
    const USER_AVERAGE_SESSIONS = AVERAGE_SESSIONS.data;

    const PERFORMANCE = await axios.get(`user/${userId}/performance`);
    const USER_PERFORMANCE = PERFORMANCE.data;
    
    ReactDOM.render(
      <React.StrictMode>
        <App main={USER_MAIN_DATA} activity={USER_ACTIVITY} session={USER_AVERAGE_SESSIONS} performance={USER_PERFORMANCE} />
      </React.StrictMode>,
      document.getElementById('root')
    );

  } catch (err) {
    console.error(err);
  }
};

sendGetRequest();

App.propTypes = {
  main : propTypes.shape({
    userInfos: propTypes.shape({
      firstName: propTypes.string,
      lastName: propTypes.string,
      age: propTypes.number,
    }),

    todayScore: propTypes.number,
    keyData: propTypes.shape({
      calorieCount: propTypes.number,
      proteinCount: propTypes.number,
      carbohydrateCount: propTypes.number,
      lipidCount: propTypes.number,
    })
  }),

  activity : propTypes.shape({
    sessions: propTypes.shape({
      day: propTypes.string,
      kilogram: propTypes.number,
      calories: propTypes.number,
    })
  }),

  session : propTypes.shape({
    sessions: propTypes.shape({
      day: propTypes.number,
      sessionLength: propTypes.number,
    })
  }),

  performance : propTypes.shape({
    userId: propTypes.number,
    kind: propTypes.array,
    data: propTypes.shape({
      value: propTypes.number,
    })

  }),

}
