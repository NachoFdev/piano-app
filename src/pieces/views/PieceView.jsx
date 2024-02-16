import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import SaveOutlined from '@mui/icons-material/SaveOutlined';
import { useForm } from '../../hooks/useForm';
import { setActiveUd } from '../../store/crud/crudSlice';
import { startSaveUd, startUploadingFile } from '../../store/crud/crudThunks';
import UploadOutlined from '@mui/icons-material/UploadOutlined';
import { VideoDisplay } from '../components/VideoDisplay';



export const PieceView = ({ piece }) => {
                            // , ud 
  // console.log(ud);

  const dispatch = useDispatch();
  
  const { active:ud, messageSaved, isSaving } = useSelector( state => state.crud );

  const { title, body, onInputChange, formState } = useForm( ud );


  const fileInputRef = useRef();


  useEffect(() => {
    dispatch( setActiveUd(formState) );
  }, [formState]);


  useEffect(() => {
    if ( messageSaved.length > 0 ) {
      Swal.fire('Unidad guardada', messageSaved, 'success');
    };
  }, [messageSaved])
  


  const onSaveUd = () => {
    dispatch( startSaveUd() );
  };


  const onFileInputChange = ({ target }) => {
    if ( target.files === 0 ) return;
    dispatch( startUploadingFile( target.files ) );
  };
  


  return (
    <Grid container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography
          fontSize={ 39 }
          fontWeight="light"
        >
          Aquí iría la fecha
        </Typography>
      </Grid>

      <input
        type="file"
        ref={ fileInputRef }
        onChange={ onFileInputChange }
        style={{ display: 'none' }}
      />

      <IconButton
        sx={{ color: 'black' }}
        disabled={ isSaving }
        onClick={ () => fileInputRef.current.click() }
      >
        <UploadOutlined />
      </IconButton>

      <Grid item>
        <Button
          disabled={ isSaving }
          onClick={ onSaveUd }
          sx={{ color: 'black', padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Escribe el título"
          label="Título"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={ title }
          onChange={ onInputChange }
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Escribe el cuerpo del contenido"
          multiline
          minRows={ 5 }
          name="body"
          value={ body }
          onChange={ onInputChange }
        />

        <VideoDisplay video={ ud.videoUrls } />

      </Grid>

    </Grid>

    
    
  );
};
