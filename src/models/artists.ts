export interface RootObject {
  artists: Artist[];
  limit: number;
  offset: number;
  total: number;
}

export interface Artist {
  full_name: string;
  id: string;
  images: Image[];
}

export interface Image {
  id: string;
  file: string;
  width: number;
  height: number;
}
