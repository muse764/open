import { playlistSlice } from "../slices";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { PlaylistModel } from "../../models";
import { PlayerService } from "../../services";

export const playlistActions = playlistSlice.actions;

export const fetchPlaylists = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().playlist.playlists.length === 0) {
      const response: PlaylistModel[] = await PlayerService.getAllPlaylists();
      dispatch(playlistActions.setPlaylists(response));
    }
  };
};
