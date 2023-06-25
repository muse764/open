import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchArtists } from "../../redux/actions";
import { useEffect } from "react";

const Users = () => {
  const dispatch = useAppDispatch();
  const artists = useAppSelector((state) => state.artist.artists);

  useEffect(() => {
    dispatch(fetchArtists());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {artists.map((artist: any) => (
        <div key={artist.id}>
          <p>{artist.full_name}</p>
          <>
            {artist.images.map((image: any) => (
              <img
                src={`http://api.muse.com/v1/media?path=image.file`}
                alt={image.id}
              />
            ))}
          </>
        </div>
      ))}
    </div>
  );
};

export default Users;
