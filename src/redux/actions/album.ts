import { albumSlice } from "../slices";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { AlbumModel } from "../../models";
import { AlbumService } from "../../services";

export const albumActions = albumSlice.actions;

export const fetchAlbums = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().album.albums.length === 0) {
      const response: AlbumModel[] = await AlbumService.getAllAlbums();
      dispatch(albumActions.setAlbums(response));
    }
  };
};
