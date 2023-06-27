import { NotFoundPage } from "..";
import { Layout } from "../../components";
import {
  useGetPlaylistByIdQuery,
  useGetPlaylistTracksQuery,
} from "../../redux/services/playlistApi";
import { Track } from "../../models/playliststracks";
import TrackItem from "../../components/TrackItem";
import { useAppSelector } from "../../redux/hooks";

const PlaylistPage = () => {
  const { activeTrack, isPlaying } = useAppSelector((state) => state.player);
  const id = window.location.pathname.split("/")[2];
  const { data, error } = useGetPlaylistByIdQuery(id);
  const { tracks } = useGetPlaylistTracksQuery({
    id,
    limit: 10,
    offset: 0,
  }).data || { tracks: [] };

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Layout>
        <div>
          <h1>{data?.name}</h1>
          {tracks.map((track: Track) => (
            <TrackItem
              key={track.id}
              track={{
                name: track.name,
                file: `http://api.muse.com/v1/media?path=${track.file}`,
                image: `http://api.muse.com/v1/media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/images/27a8b9d0-f984-4731-8fdc-0a3ae96babc6.jpeg`,
                artists: "",
              }}
              isPlaying={isPlaying}
              activeTrack={activeTrack}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default PlaylistPage;
