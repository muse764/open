import { useEffect, useState } from "react";

export default function ArtistPage() {
  const [artist, setArtist] = useState({
    full_name: "",
  });

  const api_url = import.meta.env.VITE_API_URL;
  const id = window.location.pathname.split("/")[2];

  function retrieveArtist() {
    fetch(`${api_url}/artists/${id}`).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setArtist(data);
        });
      } else {
        window.location.href = "/notfound";
      }
    });
  }

  useEffect(() => {
    retrieveArtist();
  }, []);

  return (
    <div>
      <h1>{artist.full_name}</h1>
    </div>
  );
}
