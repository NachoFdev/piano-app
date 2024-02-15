import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const PieceCard = ({ id, title, type, section }) => {

  const pieceImg = `/piano-app/images/${ id }.jpg`;

  return (
    
    <Card sx={{ display: 'flex',
                flexGrow: 1,
                width: 340,
                borderRadius: 3 }}
    >

      
        <Grid container
          justifyContent="center"
        >
          <Link
            to={ `/piano-app/user/learning/piece/${ id }` }
            className="text-decoration"
          >
            <CardMedia
              component="img"
              height="140"
              image={ pieceImg }
              alt={ title }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="black">
                  { title }
                </Typography>
              
              <Typography sx={{fontFamily: 'Monospace',letterSpacing: 6, lineHeight: 2, fontWeight: 'bold'}} variant="body2" color="text.secondary">
                Tipo { type.toLowerCase() }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unidad { section.toLowerCase() }
              </Typography>
            </CardContent>
          </Link>
        </Grid>

    </Card>
    
  );
};
