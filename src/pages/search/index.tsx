import { Grid } from "@mui/material";
import { AudioPlayer } from "../../components";

export default function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>
      <Grid container>
        <Grid item>
          <AudioPlayer src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3" />
        </Grid>
      </Grid>
    </div>
  );
}
