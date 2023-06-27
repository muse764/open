import museApi from "./muse";

export const artistApi = museApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeveralArtists: builder.query({
      query: (params) =>
        `/artists?limit=${params.limit}&offset=${params.offset}`,
    }),
    getArtistById: builder.query({
      query: (id) => `/artists/${id}`,
    }),
    getArtistAlbums: builder.query({
      query: (params) =>
        `/artists/${params.id}/albums?limit=${params.limit}&offset=${params.offset}`,
    }),
  }),
});

export const {
  useGetSeveralArtistsQuery,
  useGetArtistByIdQuery,
  useGetArtistAlbumsQuery,
} = artistApi;
export default artistApi;
