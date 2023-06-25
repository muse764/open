import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponseModel } from "../../models";

const initialState = {
  login: {},
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginResponseModel[]>) {
      state.login = action.payload;
    },
  },
});
export default userSlice;
