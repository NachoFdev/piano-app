import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { startLogout } from '../../store/auth';
import { Link } from 'react-router-dom';


const pages = ['Aprendizaje', 'Repaso', 'Repertorio', 'Cerrar sesión'];



export const NavBar = () => {


  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout() );
  };


  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
  
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
                    onClick={ onLogout }
                    noWrap
                    component={Link}
                    to="auth"
                    color="textPrimary"
                    sx={{ textDecoration: 'none' }}
                    >
                    Cerrar sesión
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
    
  );
};
