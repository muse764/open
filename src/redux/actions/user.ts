import { userSlice } from "../slices";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { UserModel } from "../../models";
import { UserService } from "../../services";

export const userActions = userSlice.actions;

export const fetchUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().user.users.length === 0) {
      const response: UserModel[] = await UserService.getAllUsers();
      dispatch(userActions.setUsers(response));
    }
  };
};
