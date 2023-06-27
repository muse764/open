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
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/album/:id", element: <AlbumPage /> },
  { path: "/artist/:id", element: <ArtistPage /> },
  { path: "/artist/:id/albums", element: <AlbumsPage /> },
  { path: "/genre/:id", element: <GenrePage /> },
  { path: "/playlist/:id", element: <PlaylistPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/track/:id", element: <TrackPage /> },
  { path: "/user/:id", element: <UserPage /> },
  { path: "/user/:id/playlists", element: <PlaylistsPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default Router;
