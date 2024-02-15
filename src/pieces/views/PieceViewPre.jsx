import { Grid, Typography } from '@mui/material';


export const PieceViewPre = ({ piece }) => {


  return (
    <Grid container
        component="main"
        flexGrow={1}
        p={3}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
    >
      
      <Typography variant="h1" align="center">
        Comenzar con <br /> { piece.title }
      </Typography>
      
    </Grid>
    
  );
};
