import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "./slices";
import { museApi } from "./services/muse";

const store = configureStore({
  reducer: {
    [museApi.reducerPath]: museApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(museApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
