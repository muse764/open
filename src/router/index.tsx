import { Route, Routes } from "react-router-dom";
import {
  AlbumPage,
  ArtistPage,
  HomePage,
  PlaylistPage,
  TrackPage,
  UserPage,
  GenrePage,
  NotFoundPage,
  PlaylistsPage,
  AlbumsPage,
  SearchPage,
} from "../pages";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/album/:id" element={<AlbumPage />} />
      <Route path="/artist/:id" element={<ArtistPage />} />
      <Route path="/artist/:id/albums" element={<AlbumsPage />} />
      <Route path="/genre/:id" element={<GenrePage />} />
      <Route path="/playlist/:id" element={<PlaylistPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/track/:id" element={<TrackPage />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="/user/:id/playlists" element={<PlaylistsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
