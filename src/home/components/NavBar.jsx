import { useState } from 'react';
import { AppBar, Box, Button, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';


const pages = ['Products', 'Pricing', 'Blog'];



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

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position='fixed'
        >
          <Toolbar>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box 
              sx={{ flexGrow: 1,
                    display: { xs: 'none',
                               sm: 'flex',
                               justifyContent: 'center'
                             }, 
                  }}
            >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, mx: 4, color: 'white', display: 'block', fontWeight: 100 }}
              >
                {page}
              </Button>
              ))}
            </Box>


          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
    </>
    
  );
};
