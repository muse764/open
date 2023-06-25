import { useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  fetchAlbums,
  fetchArtists,
  fetchPlaylists,
  fetchUsers,
} from "../../redux/actions";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const albums = useAppSelector((state) => state.album.albums);
  const artists = useAppSelector((state) => state.artist.artists);
  const playlists = useAppSelector((state) => state.playlist.playlists);
  const users = useAppSelector((state) => state.user.users);

  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchArtists());
    dispatch(fetchPlaylists());
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h4" noWrap component="div">
          Albums
        </Typography>
        <Stack direction="row" gap={2}>
          {albums.map((album: any) => (
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
                        .map((artist: any) => artist.full_name)
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
          {artists.map((artist: any) => (
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
          {playlists.map((Playlist: any) => (
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
          {users.map((user: any) => (
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
    </>
  );
}
