import { useEffect, useState } from "react";
import { NotFoundPage } from "..";
import { Layout } from "../../components";
import { Navigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { fetchPlayer, setPlayer } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../hooks";

export default function AlbumPage() {
  const dispatch = useAppDispatch();
  const player = useAppSelector((state) => state.player);
  const [album, setAlbum] = useState({
    id: "",
    name: "",
    images: [],
  });
  const [tracks, setTracks] = useState([]);

  const api_url = import.meta.env.VITE_API_URL;

  const id = window.location.pathname.split("/")[2];

  function retrieveAlbum() {
    fetch(`${api_url}/albums/${id}`).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setAlbum(data);
        });
      } else {
        window.location.href = "/notfound";
      }
    });
  }

  function retrieveAlbumTracks() {
    fetch(`${api_url}/albums/${id}/tracks?limit=10&offset=0`).then((res) =>
      res.json().then((data) => {
        setTracks(data.tracks);
      })
    );
  }

  useEffect(() => {
    retrieveAlbum();
    retrieveAlbumTracks();
  }, []);

  function onclick(name: string, file: string, artists: string) {
    const player = {
      name,
      file: `http://api.muse.com/v1//media?path=${file}`,
      image:
        "http://api.muse.com/v1//media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/images/27a8b9d0-f984-4731-8fdc-0a3ae96babc6.jpeg",
      artists,
    };
    dispatch(setPlayer(player));
    dispatch(fetchPlayer());
  }

  return (
    <>
      {/* <img
        src={`http://api.muse.com/v1/media?path=${
          (album.images[0] as { id: string, file: string, width: string, height: string }).file
        }`}
        alt={album.name}
      /> */}
      <p>{album.name}</p>
      <Box>
        <Stack direction={"column"} gap={2}>
          {tracks.map((track: any) => {
            return (
              <Stack key={track.id}>
                <Box>
                  <Button
                    onClick={() =>
                      onclick(
                        track.name,
                        track.file,
                        track.artists
                          .map((artist: any) => artist.full_name)
                          .join(", ")
                      )
                    }
                  >
                    {track.name}
                  </Button>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </>
  );
}
