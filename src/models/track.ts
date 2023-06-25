import { ArtistModel } from ".";

export interface TrackModel {
  id: string;
  name: string;
  file: string;
  track_number: number;
  artists: {
    id: string;
    full_name: string;
  }[];
  duration: number;
}

export interface TracksModel {
  tracks: TrackModel[];
}
