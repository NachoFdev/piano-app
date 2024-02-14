import { Navigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import { NavBar } from '../components/NavBar';
import { DrawerBar } from '../components/DrawerBar';
import { PieceView } from '../views/PieceView';
import { getPieceById } from '../helpers/getPieceById';




export const PieceLayout = () => {

  const { id } = useParams();
  const piece = getPieceById( id );

  if ( !piece ) {
    return <Navigate to="/user/learning" />
  }
  


  return (
    <Box 
      sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >

      <DrawerBar
        piece={ piece }
      />
      
      <PieceView />

    </Box>
  );
};
