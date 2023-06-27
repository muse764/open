export interface RootObject {
  limit: string;
  offset: string;
  total: number;
  tracks: Track[];
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
