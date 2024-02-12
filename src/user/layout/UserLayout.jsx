import { Grid } from '@mui/material';
import { NavBar } from "../components";


export const UserLayout = ({ children }) => {
  return (
    <Grid
      container
      className="animate__animated animate__fadeIn animate__faster"
    >

      <NavBar />

        { children }
    
    </Grid>
  );
};
