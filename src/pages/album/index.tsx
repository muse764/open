import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { playPause, setActiveTrack } from "../../redux/slices/player";
import { Layout } from "../../components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  useGetAlbumByIdQuery,
  useGetAlbumTracksQuery,
} from "../../redux/services/albumApi";
import { NotFoundPage } from "..";
import { NavLink } from "react-router-dom";
import { Track, Artist } from "../../models/albumstracks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import TrackItem from "../../components/TrackItem";

const AlbumPage = () => {
  const { activeTrack, isPlaying } = useAppSelector((state) => state.player);
  const id = window.location.pathname.split("/")[2];
  const { data, error } = useGetAlbumByIdQuery(id);
  const { tracks } = useGetAlbumTracksQuery({
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
        <h1>{data?.name}</h1>
        <Box>
          <List>
            {tracks.map((track: Track) => (
              <TrackItem
                key={track.id}
                track={{
                  name: track.name,
                  file: `http://api.muse.com/v1/media?path=${track.file}`,
                  image: `http://api.muse.com/v1/media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/images/27a8b9d0-f984-4731-8fdc-0a3ae96babc6.jpeg`,
                  artists: track.artists
                    .map((artist: Artist) => artist.full_name)
                    .join(", "),
                }}
                isPlaying={isPlaying}
                activeTrack={activeTrack}
              />
            ))}
          </List>
        </Box>
      </Layout>
    </>
  );
};

export default AlbumPage;
