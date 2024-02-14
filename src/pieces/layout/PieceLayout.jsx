import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import { NavBar } from '../components/NavBar';
import { DrawerBar } from '../components/DrawerBar';
import { PieceView } from '../views/PieceView';


const drawerWidth = 280;



export const PieceLayout = () => {


  const params = useParams();
  console.log(params);


  return (
    <Box sx={{ display: 'flex' }}>
      
      <NavBar drawerWidth={ drawerWidth } />

      <DrawerBar drawerWidth={ drawerWidth } />
      
      <PieceView />

    </Box>
  );
};
