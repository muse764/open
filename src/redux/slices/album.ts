import { AlbumModel, AlbumsModel } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AlbumsModel = {
  albums: [],
};

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAlbums(state, action: PayloadAction<AlbumModel[]>) {
      state.albums = action.payload;
    },
  },
});
export default albumSlice;
