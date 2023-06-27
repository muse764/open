import museApi from "./muse";

export const userApi = museApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeveralUsers: builder.query({
      query: (params) => `/users?limit=${params.limit}&offset=${params.offset}`,
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    getUserPlaylists: builder.query({
      query: (params) =>
        `/users/${params.id}/playlists?limit=${params.limit}&offset=${params.offset}`,
    }),
    addUserPlaylist: builder.mutation({
      query: (params) => ({
        url: `/users/${params.id}/playlists`,
        method: "POST",
        body: {
          name: params.name,
          description: params.description,
        },
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
        },
      }),
    }),
  }),
});

export const {
  useGetSeveralUsersQuery,
  useGetUserByIdQuery,
  useGetUserPlaylistsQuery,
  useAddUserPlaylistMutation,
} = userApi;
export default userApi;
