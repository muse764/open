import { configureStore } from "@reduxjs/toolkit";
import {
  albumSlice,
  artistSlice,
  playerSlice,
  playlistSlice,
  userSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    album: albumSlice.reducer,
    artist: artistSlice.reducer,
    playlist: playlistSlice.reducer,
    player: playerSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
