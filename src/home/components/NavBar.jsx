import { AppBar, Box, Button, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
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
        >
          <Toolbar>

            <IconButton
              sx={{ display: { sm: 'none' } }}
            >
              <MenuOutlined />
            </IconButton>

            <List sx={{ display: 'flex', direction: 'row' }}>
              {
                ['Inicio', 'Beneficios', 'Metodología', 'Contacto'].map( text => (
                  <ListItem key={ text } disablePadding>
                    <ListItemButton>
                      
                      <ListItemText primary={ text } />
                      
                    </ListItemButton>
                  </ListItem>
                ))
              }
            </List>


          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
    </>
    
  );
};
