import { AppBar, Toolbar, Typography } from '@mui/material';


export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
        <Toolbar>
            <Typography variant="h6" noWrap component="div" color={'black'}>
            Barra de navegación
            </Typography>
        </Toolbar>
    </AppBar>
  );
};
