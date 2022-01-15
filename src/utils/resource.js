import axios from 'axios';

const env = process.env.REACT_APP_ENV;
const baseURL =
    env === 'server'
        ? 'https://api-immersis.herokuapp.com'
        : 'http://localhost:5000';

const fetchResult = (query) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_RESULT_REQUEST' });
        const options = {
            url: `${baseURL}/resource/search?q=${query}`,
            method: 'GET'
        };
        try {
            const resp = await axios(options);
            dispatch({
                type: 'FETCH_RESULT_SUCCESS',
                payload: resp.data.results
            });
        } catch (error) {
            dispatch({ type: 'FETCH_RESULT_FAILED', error: error.message });
        }
    };
};

export { fetchResult };
