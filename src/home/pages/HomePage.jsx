import { Grid, Toolbar, Typography } from '@mui/material';
import { NavBar } from '../components';


export const HomePage = () => {
  return (
    <Grid container>

      <NavBar />

      <Toolbar />

      <Grid
      container
      component="main"
      sx={{ p: 2, flexGrow: 1 }}
      >

        <Typography>
          Hola soy un texto
        </Typography>

      </Grid>

    </Grid>
  );
};
