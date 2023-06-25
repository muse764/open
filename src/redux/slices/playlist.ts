import { PlaylistModel, PlaylistsModel } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PlaylistsModel = {
  playlists: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylists(state, action: PayloadAction<PlaylistModel[]>) {
      state.playlists = action.payload;
    },
  },
});
export default playlistSlice;
