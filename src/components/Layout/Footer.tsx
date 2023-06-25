import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ReactAudioPlayer from "react-audio-player";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchPlayer } from "../../redux/actions";
import ReactJkMusicPlayer from "react-jinke-music-player";

export default function Footer({ drawerWidth }: { drawerWidth: number }) {
  const dispatch = useAppDispatch();
  const player = useAppSelector((state) => state.player);

  useEffect(() => {
    dispatch(fetchPlayer());
  }, []);

  const audioList = [
    {
      name: player.name,
      singer: player.artists,
      musicSrc: player.file,
      cover: player.image,
    },
  ];

  const api_url = import.meta.env.VITE_API_URL;
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      {/* <ReactJkMusicPlayer audioLists={[{}]} /> */}
      <Toolbar>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={player.image}
            alt={player.name}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {player.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {player.artists}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <ReactAudioPlayer src={player.file} autoPlay controls />
              {/* <IconButton aria-label="previous">
                <SkipPreviousIcon />
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                <SkipNextIcon />
              </IconButton> */}
            </Box>
          </Box>
        </Card>
      </Toolbar>
    </AppBar>
  );
}
