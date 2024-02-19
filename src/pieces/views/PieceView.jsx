import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { SaveOutlined, UploadOutlined, DeleteOutline } from '@mui/icons-material';

import { useForm } from '../../hooks/useForm';
import { setActiveUd } from '../../store/crud/crudSlice';
import { startDeletingUd, startSaveUd, startUploadingFile } from '../../store/crud/crudThunks';
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


  // 
  const onFileInputChange = ({ target }) => {
    // El target son los archivos seleccionados. Filelist{ 0: File, 1: File, ... }
    if ( target.files === 0 ) return;
    // Si abrimos el selector y lo cancelamos
    console.log(target.files);
    dispatch( startUploadingFile( target.files ) );
  };


  const onDelete = () => {
    dispatch( startDeletingUd() );
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
      </Grid>

      <Grid container justifyContent="end">
        <Button
          onClick={ onDelete }
          sx={{ mt: 2 }}
          color="error"
        >
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>

      <VideoDisplay video={ ud.videoUrls } />

    </Grid>

    
    
  );
};
