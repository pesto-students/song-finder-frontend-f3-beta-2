import axios from 'axios';
import 'dotenv/config';

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

const fetchVideo = (query) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_VIDEO_REQUEST' });

        const options = {
            url: `${baseURL}/resource/video?q=${query}`,
            method: 'GET'
        };

        try {
            const resp = await axios(options);
            dispatch({
                type: 'FETCH_VIDEO_SUCCESS',
                payload: resp.data.videoId.videoId
            });
        } catch (err) {
            dispatch({ type: 'FETCH_VIDEO_ERROR', payload: err.message });
        }
    };
};

const fetchAudio = ({ title, artist }) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_AUDIO_REQUEST' });

        const options = {
            url: `${baseURL}/resource/audio?title=${title}&artist=${artist}`,
            method: 'GET'
        };

        try {
            const resp = await axios(options);
            dispatch({
                type: 'FETCH_AUDIO_SUCCESS',
                payload: resp.data.url
            });
        } catch (err) {
            dispatch({ type: 'FETCH_AUDIO_ERROR', payload: err.message });
        }
    };
};

export { fetchResult, fetchVideo, fetchAudio };
