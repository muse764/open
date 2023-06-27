import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import Controls from "./Controls";
import Player from "./Player";
import { nextTrack, prevTrack, playPause } from "../../redux/slices/player";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Seekbar from "./Seekbar";

const AudioPlayer = () => {
  const { activeTrack, currentTracks, currentIndex, isActive, isPlaying } =
    useAppSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentTracks.length) dispatch(playPause(true));
  }, [currentIndex, currentTracks, dispatch]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextTrack = () => {
    dispatch(playPause(false));

    dispatch(nextTrack(Math.floor(Math.random() * currentTracks.length)));
  };

  const handlePrevTrack = () => {
    if (currentIndex === 0) {
      dispatch(prevTrack(currentTracks.length - 1));
    } else {
      dispatch(prevTrack(currentIndex - 1));
    }
  };

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{
            width: 151,
          }}
          image={activeTrack?.image}
          alt={`Live from ${activeTrack?.name} album cover`}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {activeTrack?.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {activeTrack?.artists}
            </Typography>
          </CardContent>
          <Controls
            isPlaying={isPlaying}
            isActive={isActive}
            currentTracks={currentTracks}
            handlePlayPause={handlePlayPause}
            handlePrevTrack={handlePrevTrack}
            handleNextTrack={handleNextTrack}
          />
          <Seekbar
            value={appTime}
            min={0}
            max={duration}
            onInput={(event: any) => setSeekTime(event.target.value)}
            setSeekTime={setSeekTime}
            appTime={appTime}
          />
        </Box>
      </Card>

      <Player
        activeTrack={activeTrack}
        isPlaying={isPlaying}
        seekTime={seekTime}
        currentIndex={currentIndex}
        onEnded={handleNextTrack}
        onTimeUpdate={(event: any) => setAppTime(event.target.currentTime)}
        onLoadedData={(event: any) => setDuration(event.target.duration)}
      />
    </>
  );
};

export default AudioPlayer;
