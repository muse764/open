import { artistSlice } from "../slices";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { ArtistModel } from "../../models";
import { ArtistService } from "../../services";

export const artistActions = artistSlice.actions;

export const fetchArtists = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().artist.artists.length === 0) {
      const response: ArtistModel[] = await ArtistService.getAllArtists();
      dispatch(artistActions.setArtists(response));
    }
  };
};
