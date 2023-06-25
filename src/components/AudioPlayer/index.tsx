import { Grid, Paper, Slider, Typography } from "@mui/material";
import LoopStatusIcon from "@mui/icons-material/Repeat";
import MuteStatusIcon from "@mui/icons-material/VolumeMute";
import PlayIcon from "@mui/icons-material/PlayCircleFilled";

const AudioPlayer = ({ src }: { src: string }) => {
  return (
    <>
      <audio controls preload="true" hidden>
        <source src={src} />
      </audio>
      <Paper
        square
        elevation={1}
        style={{
          width: "425px",
          height: "45px",
        }}
      >
        <Grid>
          <Grid xs={1} item>
            <LoopStatusIcon focusable="true" />
          </Grid>
          <Grid xs={1} item>
            <PlayIcon focusable="true" />
          </Grid>
          <Grid xs={1} item>
            <MuteStatusIcon focusable="true" />
          </Grid>
          <Grid xs={9} item>
            <Grid>
              <Grid xs={2} item>
                <Typography align="center" gutterBottom noWrap>
                  10
                </Typography>
              </Grid>
              <Grid xs={8} item>
                <Slider />
              </Grid>
              <Grid xs={2} item>
                <Typography align="center" gutterBottom noWrap>
                  10
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default AudioPlayer;
