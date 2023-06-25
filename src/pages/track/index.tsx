import { useEffect, useState } from "react";

export default function TrackPage() {
  const [track, setTrack] = useState({
    name: "",
  });

  const api_url = import.meta.env.VITE_API_URL;
  const id = window.location.pathname.split("/")[2];

  function retrievePlaylist() {
    fetch(`${api_url}/tracks/${id}`).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setTrack(data);
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
      <p>{track.name}</p>
    </div>
  );
}
