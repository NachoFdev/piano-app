import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';



const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'gray',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[300]),
  backgroundColor: grey[300],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));



export const AuthPage = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: 4 }}
    >

      <Grid 
        item
        className="box-shadow"
        xs={ 3 }
        sx={{ backgroundColor: 'primary.lighter',
              width: { sm: 450 },
              padding: 3,
              borderRadius: 2 }}
      >

        <Typography
          variant="h5"
          sx={{ mb: 2, mt: 2 }}
        >
          Inicio de sesión
        </Typography>

        <Grid container>

          <Grid
            item
            xs={ 12 }
            sx={{ mt: 2 }}
          >

            <CssTextField
              label="Correo"
              type="email"
              placeholder="usuario@dominio.com"
              fullWidth
              color="secondary"
               
            />

          </Grid>

          <Grid 
            item
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <CssTextField
              label="Contraseña"
              type="password"
              placeholder="********"
              fullWidth
            />
          </Grid>

          <Grid
            container
            spacing={ 2 }
            sx={{ mt: 1, mb: 2 }}
          >
            <Grid
              item
              xs={ 12 }
            >
              <ColorButton
                variant="contained"
                color="secondary"
                fullWidth
              >
                Enviar
              </ColorButton>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="end"
          >
            <Link
              to="/"
              component={ RouterLink }
              color="inherit"
            >
              ¿No estás inscrito?
            </Link>
          </Grid>

        </Grid>

      </Grid>

    </Grid>
  );
};
