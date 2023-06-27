import { Layout } from "../../components";
import {
  useGetArtistAlbumsQuery,
  useGetArtistByIdQuery,
} from "../../redux/services/artistApi";
import { NotFoundPage } from "..";
import { Album } from "../../models/artistsalbums";

const ArtistPage = () => {
  const id = window.location.pathname.split("/")[2];
  const { data, error } = useGetArtistByIdQuery(id);
  const { albums } = useGetArtistAlbumsQuery({
    id,
    limit: 10,
    offset: 0,
  }).data || { albums: [] };

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Layout>
        <div>
          <h1>{data?.full_name}</h1>

          {albums.map((album: Album) => (
            <p key={album.id}>{album.name}</p>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ArtistPage;
