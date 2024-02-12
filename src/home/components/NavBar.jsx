import { useState } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';


const pages = ['Inicio', 'Sección 1', 'Sección 2', 'Iniciar sesión'];



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
          <Toolbar sx={{ my: 3 }}>

            <Box sx={{ flexGrow: 1,
                       display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon/>
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
                
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    noWrap
                    component={Link}
                    to="auth"
                    color="textPrimary"
                    sx={{ textDecoration: 'none' }}
                    >
                    Iniciar sesión
                  </Typography>
                </MenuItem>
                
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
                sx={{ mx: 4, color: '#757575', display: 'block' }}
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
