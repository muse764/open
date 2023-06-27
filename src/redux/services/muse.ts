import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const museApi = createApi({
  reducerPath: "museApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.muse.com/v1",
  }),
  endpoints: (builder) => ({
    getSeveralAlbums: builder.query({
      query: (params) =>
        `/albums?limit=${params.limit}&offset=${params.offset}`,
    }),
    getSeveralArtists: builder.query({
      query: (params) =>
        `/artists?limit=${params.limit}&offset=${params.offset}`,
    }),
    getSeveralTracks: builder.query({
      query: (params) =>
        `/tracks?limit=${params.limit}&offset=${params.offset}`,
    }),
    getSeveralPlaylists: builder.query({
      query: (params) =>
        `/playlists?limit=${params.limit}&offset=${params.offset}`,
    }),
    getSeveralUsers: builder.query({
      query: (params) => `/users?limit=${params.limit}&offset=${params.offset}`,
    }),
  }),
});

export const {
  useGetSeveralAlbumsQuery,
  useGetSeveralArtistsQuery,
  useGetSeveralPlaylistsQuery,
  useGetSeveralTracksQuery,
  useGetSeveralUsersQuery,
} = museApi;

export default museApi;
