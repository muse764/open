import { NavLink } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import { Layout } from "../../components";
import { useGetSeveralAlbumsQuery } from "../../redux/services/albumApi";
import {
  useGetSeveralArtistsQuery,
  useGetSeveralPlaylistsQuery,
  useGetSeveralUsersQuery,
} from "../../redux/services/muse";
import { Album, AlbumArtist } from "../../models/albums";
import { Artist } from "../../models/artists";
import { Playlist } from "../../models/playlists";
import { User } from "../../models/users";

const HomePage = () => {
  const { albums } = useGetSeveralAlbumsQuery({
    limit: 10,
    offset: 0,
  }).data || { albums: [] };
  const { artists } = useGetSeveralArtistsQuery({
    limit: 10,
    offset: 0,
  }).data || { artists: [] };

  const { playlists } = useGetSeveralPlaylistsQuery({
    limit: 10,
    offset: 0,
  }).data || { playlists: [] };

  const { users } = useGetSeveralUsersQuery({
    limit: 10,
    offset: 0,
  }).data || { users: [] };

  const api_url = import.meta.env.VITE_API_URL;

  return (
    <>
      <Layout>
        <Box>
          <Typography variant="h4" noWrap component="div">
            Albums
          </Typography>
          <Stack direction="row" gap={2}>
            {albums.map((album: Album) => (
              <NavLink key={album.id} to={`/album/${album.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      {...(album.images.length > 0 && {
                        image: `${api_url}/media?path=${album.images[0].file}`,
                      })}
                      alt={album.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {album.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {album.artists
                          .map((artist: AlbumArtist) => artist.full_name)
                          .join(", ")}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="h4" noWrap component="div">
            Artists
          </Typography>
          <Stack direction="row" gap={2}>
            {artists.map((artist: Artist) => (
              <NavLink key={artist.id} to={`/artist/${artist.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      {...(artist.images.length > 0 && {
                        image: `${api_url}/media?path=${artist.images[0].file}`,
                      })}
                      alt={artist.full_name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {artist.full_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="h4" noWrap component="div">
            Playlists
          </Typography>
          <Stack direction="row" gap={2}>
            {playlists.map((Playlist: Playlist) => (
              <NavLink key={Playlist.id} to={`/Playlist/${Playlist.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      {...(Playlist.images.length > 0 && {
                        image: `${api_url}/media?path=${Playlist.images[0].file}`,
                      })}
                      alt={Playlist.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {Playlist.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {Playlist.owner.username}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="h4" noWrap component="div">
            Users
          </Typography>
          <Stack direction="row" gap={2}>
            {users.map((user: User) => (
              <NavLink key={user.id} to={`/user/${user.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      {...(user.images.length > 0 && {
                        image: `${api_url}/media?path=${user.images[0].file}`,
                      })}
                      alt={user.username}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.username}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            ))}
          </Stack>
        </Box>
      </Layout>
    </>
  );
};

export default HomePage;
