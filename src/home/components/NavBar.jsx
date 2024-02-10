import { AppBar, IconButton, Toolbar } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';



function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}





export const NavBar = (props) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position='fixed'
          sx={{  }}
        >
          <Toolbar>
            <IconButton>
              <MenuOutlined />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
    </>
    
  );
};
