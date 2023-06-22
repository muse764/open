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

export default function Footer({ drawerWidth }: { drawerWidth: number }) {
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
      <Toolbar>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={`${api_url}/media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/images/27a8b9d0-f984-4731-8fdc-0a3ae96babc6.jpeg`}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Track Name
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Artist Name
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <ReactAudioPlayer
                src="http://localhost:43883/v1/media?path=public/users/e242bc9a0ceea852400d3f927f07557e4a36b9f34e7f/albums/f97814b5-8f86-4c94-b7d8-bee4c65c37b9/tracks/52857870-4837-4c59-a135-0e6bfb5e7b78.webm"
                autoPlay
                controls
              />
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
