import museApi from "./muse";

export const meApi = museApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: (accessToken) => ({
        url: "/me",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    getMyPlaylists: builder.query({
      query: (params) => ({
        url: `/me/playlists?limit=${params.limit}&offset=${params.offset}`,
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
        },
      }),
    }),
  }),
});

export const { useGetMyPlaylistsQuery, useGetMyProfileQuery } = meApi;
export default meApi;
