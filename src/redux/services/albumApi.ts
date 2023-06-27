import museApi from "./muse";

export const albumApi = museApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeveralAlbums: builder.query({
      query: (params) =>
        `/albums?limit=${params.limit}&offset=${params.offset}`,
    }),
    getAlbumById: builder.query({
      query: (id) => `/albums/${id}`,
    }),
    getAlbumTracks: builder.query({
      query: (params) =>
        `/albums/${params.id}/tracks?limit=${params.limit}&offset=${params.offset}`,
    }),
  }),
});

export const {
  useGetSeveralAlbumsQuery,
  useGetAlbumByIdQuery,
  useGetAlbumTracksQuery,
} = albumApi;
export default albumApi;
