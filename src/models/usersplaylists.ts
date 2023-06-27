export interface RootObject {
  limit: string;
  offset: string;
  playlists: Playlist[];
  total: number;
}

export interface Playlist {
  description: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
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
