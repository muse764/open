import { useEffect, useState } from "react";

export default function PlaylistPage() {
  const [playlist, setPlaylist] = useState({
    name: "",
  });

  const api_url = import.meta.env.VITE_API_URL;
  const id = window.location.pathname.split("/")[2];

  function retrievePlaylist() {
    fetch(`${api_url}/playlists/${id}`).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setPlaylist(data);
        });
      } else {
        window.location.href = "/notfound";
      }
    });
  }

  useEffect(() => {
    retrievePlaylist();
  }, []);

  return (
    <div>
      <h1>Playlist</h1>
      <p>{playlist.name}</p>
    </div>
  );
}
