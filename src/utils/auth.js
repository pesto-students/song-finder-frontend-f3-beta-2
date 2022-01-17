const axios = require('axios');

const env = process.env.REACT_APP_ENV;
const baseURL =
    env === 'server'
        ? 'https://api-immersis.herokuapp.com'
        : 'http://localhost:5000';

const IsLoggedIn = () => {
    return async (dispatch) => {
        const options = {
            url: `${baseURL}/auth/loggedin`,
            method: 'GET'
        };
        try {
            const resp = axios(options);
            dispatch({ type: resp.data ? 'LOG_IN' : 'LOG_OUT' });
        } catch (err) {
            console.log(err);
        }
    };
};

exports.IsLoggedIn = IsLoggedIn;
