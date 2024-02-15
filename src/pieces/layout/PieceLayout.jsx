import { Navigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import { DrawerBar } from '../components/DrawerBar';
import { PieceView } from '../views/PieceView';
import { PieceViewPre } from '../views/PieceViewPre';
import { getPieceById } from '../helpers/getPieceById';



export const PieceLayout = () => {

  const { id, ud } = useParams();
  console.log(ud);
  const piece = getPieceById( id );
  
  const teachingUnits = piece.content;
  const teachingUnit = teachingUnits.find( tUnit => tUnit.unit === ud );
  console.log(teachingUnits);
  // const teachingUnit = getUdByNum( ud );


  if ( !piece ) {
    return <Navigate to="/user/learning" />
  }



  return (
    <Box 
      sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >

      <DrawerBar piece={ piece }/>

      {
        ( !ud ) ? <PieceViewPre piece={ piece } /> : <PieceView piece={ piece } ud={ teachingUnit }/>
      }

    </Box>
  );
};
