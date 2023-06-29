import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {}, 
    genreListId: ''
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song;

        },

        playPause: (state, action) => {
            state.isPlaying = action.payload
        },

        selectGenreListId: (state, action) => {
            state.genreListId = action.payload;
        },
    },
})

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions

export default playerSlice.reducer; 