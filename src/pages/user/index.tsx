import { useEffect, useState } from "react";

export default function UserPage() {
  const [user, setUser] = useState({
    id: "",
    username: "",
    images: [],
  });
  const [playlists, setPlaylists] = useState([]);

  const api_url = import.meta.env.VITE_API_URL;
  const id = window.location.pathname.split("/")[2];

  function retrieveUser() {
    fetch(`${api_url}/users/${id}`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setUser(data.user);
          });
        } else {
          window.location.href = "/notfound";
        }
      })
      .catch((_) => {});
  }

  function retrievePlaylists() {
    fetch(`${api_url}/users/${id}/playlists?limit=10&offset=0`, {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setPlaylists(data.playlists);
      })
    );
  }

  useEffect(() => {
    retrieveUser();
    retrievePlaylists();
  }, []);

  return (
    <div>
      {/* {user.images.map((image: any) => (
        <img
          key={image.id}
          src={api_url + "/media?path=" + image.file}
          alt="user"
        />
      ))} */}

      <p>{user.username}</p>

      {playlists.map((playlist: any) => (
        <p key={playlist.id}>{playlist.name}</p>
      ))}
    </div>
  );
}
