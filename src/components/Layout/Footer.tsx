import { AppBar, Grid, Toolbar } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import AudioPlayer from "../AudioPlayer";

const Footer = ({ drawerWidth }: { drawerWidth: number }) => {
  const { activeTrack } = useAppSelector((state) => state.player);

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
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {activeTrack?.name && <AudioPlayer />}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
