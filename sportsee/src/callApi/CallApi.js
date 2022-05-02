import { Component } from 'react';
import MainData from '../models/MainData';
import MainActivity from '../models/MainActivity';
import MainSession from '../models/MainSession';
import MainPerformance from '../models/MainPerformance';

const axios = require('axios');

class CallApi extends Component {

    async getUserInfo(userId, source) {
        if (source === "API") {
            let res = await axios.get(`http://localhost:8080/user/${userId}`);
            let UserInfo = new MainData(res.data.data)
            return (UserInfo);
        }
        else {
            let res = await axios.get(`http://localhost:3004/USER_MAIN_DATA/${userId}`);
            let UserInfo = new MainData(res.data)
            return (UserInfo);

        }
    }

    async getUserActivity(userId, source) {
        if (source === "API") {
            let res = await axios.get(`http://localhost:8080/user/${userId}/activity`);
            let UserActivity = new MainActivity(res.data.data)
            return (UserActivity);
        }
        else {
            let res = await axios.get(`http://localhost:3004/USER_ACTIVITY/${userId}`);
            let UserActivity = new MainActivity(res.data)
            return (UserActivity);
        }
    }
    async getUserSession(userId, source) {
        if (source === "API") {
            let res = await axios.get(`http://localhost:8080/user/${userId}/average-sessions`);
            let UserSession = new MainSession(res.data.data)
            return (UserSession);
        }
        else {
            let res = await axios.get(`http://localhost:3004/USER_AVERAGE_SESSIONS/${userId}`);
            let UserSession = new MainSession(res.data)
            return (UserSession);
        }
    }

    async getUserPerformance(userId, source) {
        if (source === "API") {
            let res = await axios.get(`http://localhost:8080/user/${userId}/performance`);
            let UserPerformance = new MainPerformance(res.data.data)
            return (UserPerformance);
        }
        else {
            let res = await axios.get(`http://localhost:3004/USER_PERFORMANCE/${userId}`);
            let UserPerformance = new MainPerformance(res.data)
            return (UserPerformance);
        }
    }

}


export default CallApi;