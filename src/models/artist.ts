export interface ArtistModel {
  id: string;
  full_name: string;
  images: {
    id: string;
    file: string;
    width: number;
    height: number;
  }[];
}

export interface ArtistsModel {
  artists: ArtistModel[];
}
