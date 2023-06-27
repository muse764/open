import { createSlice } from "@reduxjs/toolkit";
import { RootObject, Track } from "../../models/player";

const initialState: RootObject = {
  currentTracks: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeTrack: {} as Track,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveTrack: (state, action) => {
      state.activeTrack = action.payload;

      state.currentTracks = [...state.currentTracks, action.payload];
      state.isActive = true;
    },

    nextTrack: (state, action) => {
      if (state.currentTracks[action.payload]) {
        state.activeTrack = state.currentTracks[action.payload];
      } else {
        state.activeTrack = state.currentTracks[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevTrack: (state, action) => {
      if (state.currentTracks[action.payload]) {
        state.activeTrack = state.currentTracks[action.payload];
      } else {
        state.activeTrack = state.currentTracks[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});
export const { setActiveTrack, nextTrack, prevTrack, playPause } =
  playerSlice.actions;
export default playerSlice.reducer;
