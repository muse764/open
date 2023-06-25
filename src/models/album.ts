export interface AlbumModel {
  id: string;
  name: string;
  type: string;
  release_date: string;
  genres: {
    name: string;
  }[];
  artists: {
    id: string;
    full_name: string;
    images: {
      id: string;
      file: string;
      width: number;
      height: number;
    }[];
  }[];
}

export interface AlbumsModel {
  albums: AlbumModel[];
}
