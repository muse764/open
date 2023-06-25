import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  file: "",
  image: "",
  artists: "",
  volume: 0,
  current: 0,
  progress: 0,
  duration: 0,
  status: "paused",
};

const userSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer(state, action: PayloadAction<any>) {
      state.name = action.payload.name;
      state.file = action.payload.file;
      state.image = action.payload.image;
      state.artists = action.payload.artists;
      state.volume = action.payload.volume;
      state.current = action.payload.current;
      state.progress = action.payload.progress;
      state.duration = action.payload.duration;
      state.status = action.payload.status;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    setCurrent(state, action: PayloadAction<number>) {
      state.current = action.payload;
    },
    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});
export default userSlice;
