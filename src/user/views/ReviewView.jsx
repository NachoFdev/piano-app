import { Grid, Toolbar, Typography } from '@mui/material';
import { NavBar } from '../components';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';


function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}



export const ReviewView = (props) => {
  return (
    <>
      <Grid container>

        <NavBar />

        <Toolbar
          id="back-to-top-anchor"
          sx={{ my: 3 }}
        />

        <Grid
        container
        component="main"
        sx={{ p: 2, flexGrow: 1 }}
        >

          <Typography sx={{ height: 1000 }}>
            Hola soy Repaso
          </Typography>

        </Grid>

        

      </Grid>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    
    </>

    
  );
};