import { useEffect, useRef } from "react";
import { Track } from "../../models/player";

interface PlayerProps {
  activeTrack: Track;
  isPlaying: boolean;
  seekTime: number;
  currentIndex: number;
  onEnded: () => void;
  onTimeUpdate: (event: any) => void;
  onLoadedData: (event: any) => void;
}

const Player = ({
  activeTrack,
  isPlaying,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
}: PlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null);

  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = seekTime;
    }
  }, [seekTime]);

  return (
    <audio
      src={activeTrack?.file}
      ref={ref}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
