export interface RootObject {
  limit: number;
  offset: number;
  playlists: Playlist[];
  total: number;
}

export interface Playlist {
  description: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  tracks: Track[];
}

export interface Image {
  id: string;
  file: string;
  width: number;
  height: number;
}

export interface Owner {
  id: string;
  username: string;
}

export interface Track {
  albumId: string;
  createdAt: Date;
  duration: number;
  file: string;
  id: string;
  name: string;
  published: boolean;
  track_number: number;
  updatedAt: Date;
}
