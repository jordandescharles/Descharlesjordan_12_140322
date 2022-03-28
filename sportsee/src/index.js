import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

const userId="12";
axios.defaults.baseURL = 'http://localhost:8080';


const sendGetRequest = async () => {
  try {
    const MAIN_DATA = await axios.get(`user/${userId}`);
    const USER_MAIN_DATA = MAIN_DATA.data;

    const ACTIVITY = await axios.get(`user/${userId}/activity`);
    const USER_ACTIVITY = ACTIVITY.data

    const AVERAGE_SESSIONS = await axios.get(`user/${userId}/average-sessions`);
    const USER_AVERAGE_SESSIONS = AVERAGE_SESSIONS.data;

    const PERFORMANCE = await axios.get(`user/${userId}/performance`);
    const USER_PERFORMANCE = PERFORMANCE.data;


      ReactDOM.render(
        <React.StrictMode>
          <App main = {USER_MAIN_DATA} 
              activity = {USER_ACTIVITY} 
              session = {USER_AVERAGE_SESSIONS} 
              performance = {USER_PERFORMANCE}/>
        </React.StrictMode>,
        document.getElementById('root')
      );


  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

sendGetRequest();

