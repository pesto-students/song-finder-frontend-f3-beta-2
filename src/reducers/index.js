import { combineReducers } from 'redux';
import { AudioReducer } from './audioReducer';
import { AuthReducer } from './authReducer';
import { LyricsReducer } from './lyricsReducer';
import { ResultReducer } from './resultReducer';
import { VideoReducer } from './videoReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    result: ResultReducer,
    video: VideoReducer,
    audio: AudioReducer,
    lyrics: LyricsReducer
});

export { RootReducer };
