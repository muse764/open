import { NotFoundPage } from "..";
import { Layout } from "../../components";
import {
  useGetUserByIdQuery,
  useGetUserPlaylistsQuery,
} from "../../redux/services/userApi";
import { Playlist } from "../../models/usersplaylists";

const UserPage = () => {
  const id = window.location.pathname.split("/")[2];
  const { data, error } = useGetUserByIdQuery(id);
  const { playlists } = useGetUserPlaylistsQuery({
    id,
    limit: 10,
    offset: 0,
  }).data || { playlists: [] };

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Layout>
        <div>
          <h1>{data?.user.username}</h1>

          {playlists.map((playlist: Playlist) => (
            <p key={playlist.id}>{playlist.name}</p>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default UserPage;
