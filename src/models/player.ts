export interface RootObject {
  currentTracks: Track[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeTrack: Track;
}

export interface Track {
  name: string;
  file: string;
  image: string;
  artists: string;
}
