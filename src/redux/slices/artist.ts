import { ArtistModel, ArtistsModel } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ArtistsModel = {
  artists: [],
};

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtists(state, action: PayloadAction<ArtistModel[]>) {
      state.artists = action.payload;
    },
  },
});
export default artistSlice;
