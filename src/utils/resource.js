import axios from 'axios';

const baseURL = 'https://api-immersis.herokuapp.com';

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
            localStorage.setItem('audio', resp.data.url);
            dispatch({
                type: 'FETCH_AUDIO_SUCCESS',
                payload: resp.data.url
            });
        } catch (err) {
            dispatch({ type: 'FETCH_AUDIO_ERROR', payload: err.message });
        }
    };
};

const fetchLyrics = ({ title, artist }) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_LYRICS_REQUEST' });

        const options = {
            url: `${baseURL}/resource/lyrics?title=${title}&artist=${artist}`,
            method: 'GET'
        };

        try {
            const resp = await axios(options);
            dispatch({
                type: 'FETCH_LYRICS_SUCCESS',
                payload: resp.data
            });
        } catch (err) {
            dispatch({ type: 'FETCH_LYRICS_ERROR', payload: err.message });
        }
    };
};

export { fetchResult, fetchVideo, fetchAudio, fetchLyrics };
