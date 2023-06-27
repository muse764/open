import museApi from "./muse";

export const playlistApi = museApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeveralPlaylists: builder.query({
      query: (params) =>
        `/playlists?limit=${params.limit}&offset=${params.offset}`,
    }),
    getPlaylistById: builder.query({
      query: (id) => `/playlists/${id}`,
    }),
    getPlaylistTracks: builder.query({
      query: (params) =>
        `/playlists/${params.id}/tracks?limit=${params.limit}&offset=${params.offset}`,
    }),
    updatePlaylist: builder.mutation({
      query: (params) => ({
        url: `/playlists/${params.id}`,
        method: "PUT",
        body: {
          name: params.name,
          description: params.description,
        },
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
        },
      }),
    }),
    addPlaylistTracks: builder.mutation({
      query: (params) => ({
        url: `/playlists/${params.id}/tracks`,
        method: "POST",
        body: {
          tracks: params.tracks,
        },
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
        },
      }),
    }),
    removePlaylistTracks: builder.mutation({
      query: (params) => ({
        url: `/playlists/${params.id}/tracks`,
        method: "DELETE",
        body: {
          tracks: params.tracks,
        },
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
        },
      }),
    }),
  }),
});

export const {
  useGetSeveralPlaylistsQuery,
  useGetPlaylistByIdQuery,
  useGetPlaylistTracksQuery,
} = playlistApi;
export default playlistApi;
