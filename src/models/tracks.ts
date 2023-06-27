export interface RootObject {
  limit: number;
  offset: number;
  total: number;
  tracks: Track[];
}

export interface Track {
  album: Album;
  artists: TrackArtist[];
  duration: number;
  id: string;
  name: string;
  track_number: number;
}

export interface Album {
  artists: AlbumArtist[];
  genres: Genre[];
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  type: string;
}

export interface Genre {
  name: string;
}

export interface AlbumArtist {
  full_name: string;
  id: string;
}

export interface Image {
  file: string;
  height: number;
  id: string;
  width: number;
}

export interface TrackArtist {
  full_name: string;
  id: string;
  images: Image[];
}
