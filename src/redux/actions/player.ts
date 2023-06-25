import { playerSlice } from "../slices";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const artistActions = playerSlice.actions;

export const fetchPlayer = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().artist.artists.length === 0) {
      const response = {
        name: localStorage.getItem("name"),
        file: localStorage.getItem("file"),
        image: localStorage.getItem("image"),
        artists: localStorage.getItem("artists"),
        volume: Number(localStorage.getItem("volume")),
        current: Number(localStorage.getItem("current")),
        progress: Number(localStorage.getItem("progress")),
        duration: Number(localStorage.getItem("duration")),
        status: Number(localStorage.getItem("status")),
      };
      dispatch(artistActions.setPlayer(response));
    }
  };
};

export const setPlayer = (
  player: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    localStorage.setItem("name", player.name);
    localStorage.setItem("file", player.file);
    localStorage.setItem("image", player.image);
    localStorage.setItem("artists", player.artists);
    localStorage.setItem("status", "play");
    dispatch(artistActions.setPlayer(player));
  };
};

export const setVolume = (
  volume: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    localStorage.setItem("volume", String(volume));
    dispatch(artistActions.setVolume(volume));
  };
};

export const setProgress = (
  progress: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    localStorage.setItem("volume", String(progress));
    dispatch(artistActions.setProgress(progress));
  };
};

export const setDuration = (
  duration: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    localStorage.setItem("volume", String(duration));
    dispatch(artistActions.setDuration(duration));
  };
};

export const setCurrent = (
  current: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    localStorage.setItem("volume", String(current));
    dispatch(artistActions.setCurrent(current));
  };
};

export const setStatus = (
  status: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    localStorage.setItem("status", status);
    dispatch(artistActions.setStatus(status));
  };
};
