import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Dispatch, SetStateAction } from "react";
import { Track } from "../../models/player";

interface ControlsProps {
  isPlaying: boolean;
  isActive: boolean;
  currentTracks: Track[];
  handlePlayPause: () => void;
  handlePrevTrack: () => void;
  handleNextTrack: () => void;
}

const Controls = ({
  isPlaying,
  isActive,
  currentTracks,
  handlePlayPause,
  handlePrevTrack,
  handleNextTrack,
}: ControlsProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
      {currentTracks?.length && (
        <IconButton aria-label="previous" onClick={handlePrevTrack}>
          <SkipPreviousIcon />
        </IconButton>
      )}
      {isPlaying ? (
        <IconButton aria-label="pause" onClick={handlePlayPause}>
          <PauseIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
      ) : (
        <IconButton aria-label="play" onClick={handlePlayPause}>
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
      )}

      {currentTracks?.length && (
        <IconButton aria-label="next" onClick={handleNextTrack}>
          <SkipNextIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Controls;
