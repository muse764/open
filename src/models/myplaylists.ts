export interface RootObject {
  playlists: Playlist[];
}

export interface Playlist {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  ownerId: string;
  public: boolean;
  updatedAt: Date;
}
