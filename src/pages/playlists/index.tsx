import { useEffect, useState } from "react";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([]);

  const api_url = import.meta.env.VITE_API_URL;
  const id = window.location.pathname.split("/")[2];

  function retrievePlaylists() {
    fetch(`${api_url}/users/${id}/playlists?limit=100&offset=0`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setPlaylists(data.playlists);
          });
        } else {
          window.location.href = "/notfound";
        }
      })
      .catch((_) => {});
  }

  useEffect(() => {
    retrievePlaylists();
  }, []);

  return (
    <div>
      <h1>Playlists</h1>
      {playlists.map((playlist: any) => (
        <p key={playlist.id}>{playlist.name}</p>
      ))}
    </div>
  );
}
