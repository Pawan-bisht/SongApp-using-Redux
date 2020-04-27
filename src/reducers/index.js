import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        {
            title:"No scrubs",
            duration:"4:05"
        },
        {
            title:"Starboy",
            duration:"6:00"
        },
        {
            title:"Without you",
            duration:"3:20"
        },
        {
            title:"Godzilla",
            duration:"5:15"
        }
    ];
}

const selectedSongReducer = (selectedSong = null,action) =>{

    if(action.type === "SONG_SELECTED")
    {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})
