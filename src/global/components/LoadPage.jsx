import { CircularProgress, Grid } from '@mui/material';



export const LoadPage = () => {
  return (

    <Grid
      container
      spacing={ 0 }
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: 4 }}
    >

      <Grid 
        item
        justifyContent="center"
      >
        <CircularProgress color="grey"/>
      </Grid>

    </Grid>
  );
};
