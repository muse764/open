import museApi from "./muse";

export const trackApi = museApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeveralTracks: builder.query({
      query: (params) =>
        `/tracks?limit=${params.limit}&offset=${params.offset}`,
    }),
    getTrackById: builder.query({
      query: (id) => `/tracks/${id}`,
    }),
  }),
});

export const { useGetSeveralTracksQuery, useGetTrackByIdQuery } = trackApi;
export default trackApi;
