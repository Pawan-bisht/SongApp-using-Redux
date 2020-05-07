// Action Creator
//Exports named export
export const selectSong = (song) =>{    
    //Return an action
    return {
        type:"SONG_SELECTED",
        payload:song
    };
}

export const getSongs = () =>{
    return {
        type : "ALL_SONGS",
        payload :  [
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
        ]
    }
}



