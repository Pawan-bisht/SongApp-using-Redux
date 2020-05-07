import { combineReducers } from 'redux';
const songsReducer = (allSongs = [], action) => {
    if(action.type === "ALL_SONGS")
        return action.payload;
    return allSongs;    
}

const selectedSongReducer = (selectedSong = null,action) =>{

    if(action.type === "SONG_SELECTED")
    {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songsl:songsReducer,
    selectedSong:selectedSongReducer
})
