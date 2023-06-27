export interface RootObject {
  limit: string;
  offset: string;
  total: number;
  tracks: Track[];
}

export interface Track {
  album: Album;
  artists: Artist[];
  duration: number;
  file: string;
  id: string;
  name: string;
  track_number: number;
}

export interface Album {
  id: string;
  name: string;
}

export interface Artist {
  full_name: string;
  id: string;
}
