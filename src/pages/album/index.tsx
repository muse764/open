import { useEffect, useState } from "react";
import { NotFoundPage } from "..";
import { Layout } from "../../components";
import { Navigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";

export default function AlbumPage() {
  const [album, setAlbum] = useState({
    name: "",
  });
  const [tracks, setTracks] = useState([]);

  const api_url = import.meta.env.VITE_API_URL;

  const id = window.location.pathname.split("/")[2];

  function retrieveAlbum() {
    fetch(`${api_url}/albums/${id}`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setAlbum(data);
          });
        } else {
          window.location.href = "/notfound";
        }
      })
      .catch((_) => {});
  }

  function retrieveAlbumTracks() {
    fetch(`${api_url}/albums/${id}/tracks?limit=10&offset=0`, {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setTracks(data.tracks);
      })
    );
  }

  useEffect(() => {
    retrieveAlbum();
    retrieveAlbumTracks();
  }, []);

  return (
    <>
      <p>{album.name}</p>

      <Box>
        <Stack direction={"column"} gap={2}>
          {tracks.map((track: any) => {
            return (
              <Stack key={track.id}>
                <Box>
                  <p>{track.name}</p>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </>
  );
}
