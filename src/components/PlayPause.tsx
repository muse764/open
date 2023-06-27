import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayPause = ({
  isPlaying,
  activeTrack,
  track,
  handlePause,
  handlePlay,
}: {
  isPlaying: boolean;
  activeTrack: any;
  track: any;
  handlePause: () => void;
  handlePlay: () => void;
}) =>
  isPlaying && activeTrack?.name === track.name ? (
    <PauseIcon onClick={handlePause} />
  ) : (
    <PlayArrowIcon onClick={handlePlay} />
  );

export default PlayPause;
