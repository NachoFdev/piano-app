import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import { DrawerBar } from '../components/DrawerBar';
import { PieceView } from '../views/PieceView';
import { PieceViewPre } from '../views/PieceViewPre';
import { getPieceById } from '../helpers/getPieceById';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/crud/crudThunks';



export const PieceLayout = () => {

  const { id
          // ,ud 
        } = useParams();
  // console.log(ud);
  const piece = getPieceById( id );
  
  // const teachingUnits = piece.content;
  // const teachingUnit = teachingUnits.find( tUnit => tUnit.unit === ud );
  // console.log(teachingUnits);


  if ( !piece ) {
    return <Navigate to="/user/learning" />
  }


  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.crud );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }


  return (
    <Box 
      sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >

      <DrawerBar piece={ piece }/>

      {/* {
        ( !ud ) 
          ? <PieceViewPre piece={ piece } />
          : <PieceView piece={ piece } ud={ teachingUnit }/>
      } */}

      {
        ( !!active )
        ? <PieceView piece={ piece } />
        : <PieceViewPre piece={ piece } />
      }

      <IconButton
        onClick={ onClickNewNote }
        size='large'
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </Box>
  );
};
