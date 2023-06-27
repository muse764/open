import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PlayPause from "./PlayPause";
import { playPause, setActiveTrack } from "../redux/slices/player";
import { useAppDispatch } from "../redux/hooks";
import { NavLink } from "react-router-dom";

const TrackItem = ({
  track,
  isPlaying,
  activeTrack,
}: {
  track: any;
  isPlaying: boolean;
  activeTrack: any;
}) => {
  const dispatch = useAppDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveTrack(track));
    dispatch(playPause(true));
  };

  return (
    <>
      <ListItem>
        <PlayPause
          isPlaying={isPlaying}
          activeTrack={activeTrack}
          track={track}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
        <ListItemText>
          <NavLink to={`/track/${track.id}`}>{track.name}</NavLink>
        </ListItemText>
      </ListItem>
    </>
  );
};

export default TrackItem;
