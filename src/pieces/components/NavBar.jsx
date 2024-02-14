import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const NavBar = ({ drawerWidth, piece }) => {
  return (
    <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
        <Toolbar
          sx={{ display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center' }} 
        >
            <Typography variant="h6" noWrap component="div" color={'black'}>
             { piece.title }
            </Typography>
            <Link 
              to="/user/learning"
              className="text-decoration"
            >
              <Typography color="black">
                Volver
              </Typography>
            </Link>
        </Toolbar>
    </AppBar>
  );
};
