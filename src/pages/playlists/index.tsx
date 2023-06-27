import { useGetUserPlaylistsQuery } from "../../redux/services/userApi";
import { Layout } from "../../components";
import { Playlist } from "../../models/usersplaylists";

const PlaylistsPage = () => {
  const id = window.location.pathname.split("/")[2];
  const { playlists } = useGetUserPlaylistsQuery({
    id,
    limit: 100,
    offset: 0,
  }).data || { playlists: [] };

  return (
    <>
      <Layout>
        <h1>Playlists</h1>
        {playlists.map((playlist: Playlist) => (
          <p key={playlist.id}>{playlist.name}</p>
        ))}
      </Layout>
    </>
  );
};

export default PlaylistsPage;
