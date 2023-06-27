import { saveAccessToken, saveRefreshToken } from "../../utils";
import museApi from "./muse";

export const authApi = museApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      transformResponse: (response) => {
        saveAccessToken(response);
        saveRefreshToken(response);
        return {
          response,
        };
      },
    }),
    refresh: builder.mutation({
      query: (refreshToken) => ({
        url: "/auth/refresh",
        method: "POST",
        body: {
          refreshToken,
        },
      }),
      transformResponse: (response) => {
        saveAccessToken(response);
        return {
          response,
        };
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useRefreshMutation } =
  authApi;
export default authApi;
