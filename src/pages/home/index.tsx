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

export default function HomePage() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [users, setUsers] = useState([]);

  const api_url = import.meta.env.VITE_API_URL;

  function retrieveAlbums() {
    fetch(`${api_url}/albums?limit=5&offset=0`, {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setAlbums(data.albums);
      })
    );
  }

  function retrieveArtists() {
    fetch(`${api_url}/artists?limit=5&offset=0`, {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setArtists(data.artists);
      })
    );
  }

  function retrievePlaylists() {
    fetch(`${api_url}/playlists?limit=5&offset=0`, {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setPlaylists(data.playlists);
      })
    );
  }

  function retrieveUsers() {
    fetch(`${api_url}/users?limit=5&offset=0`, {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setUsers(data.users);
      })
    );
  }

  useEffect(() => {
    retrieveAlbums();
    retrieveArtists();
    retrievePlaylists();
    retrieveUsers();
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h4" noWrap component="div">
          Albums
        </Typography>
        <Stack direction="row" gap={2}>
          {albums.map((album: any) => (
            <NavLink to={`/album/${album.id}`}>
              <Card sx={{ maxWidth: 345 }} key={album.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${api_url}/media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/images/27a8b9d0-f984-4731-8fdc-0a3ae96babc6.jpeg`}
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
            <NavLink to={`/artist/${artist.id}`}>
              <Card sx={{ maxWidth: 345 }} key={artist.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${api_url}/media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/images/27a8b9d0-f984-4731-8fdc-0a3ae96babc6.jpeg`}
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
            <NavLink to={`/Playlist/${Playlist.id}`}>
              <Card sx={{ maxWidth: 345 }} key={Playlist.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${api_url}/media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/images/27a8b9d0-f984-4731-8fdc-0a3ae96babc6.jpeg`}
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
            <NavLink to={`/user/${user.id}`}>
              <Card sx={{ maxWidth: 345 }} key={user.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${api_url}/media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/images/27a8b9d0-f984-4731-8fdc-0a3ae96babc6.jpeg`}
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
