import { Layout } from "../../components";
import { useGetArtistAlbumsQuery } from "../../redux/services/artistApi";

const AlbumsPage = () => {
  const id = window.location.pathname.split("/")[2];
  const { albums } = useGetArtistAlbumsQuery({
    id,
    limit: 100,
    offset: 0,
  }).data || { albums: [] };
  return (
    <>
      <Layout>
        <div>Albums</div>
        {albums.map((album: any) => (
          <p key={album.id}>{album.name}</p>
        ))}
      </Layout>
    </>
  );
};

export default AlbumsPage;
