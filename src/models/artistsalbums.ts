export interface RootObject {
  albums: Album[];
  limit: string;
  offset: string;
  total: number;
}

export interface Album {
  artists: AlbumArtist[];
  genres: Genre[];
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  tracks: Track[];
  type: string;
}

export interface Genre {
  name: string;
}

export interface AlbumArtist {
  full_name: string;
  id: string;
  images: Image[];
}

export interface Image {
  file: string;
  height: number;
  id: string;
  width: number;
}

export interface Track {
  artists: TrackArtist[];
  duration: number;
  file: string;
  id: string;
  name: string;
  track_number: number;
}

export interface TrackArtist {
  full_name: string;
  id: string;
}
