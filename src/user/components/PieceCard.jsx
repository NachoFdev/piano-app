import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const PieceCard = ({ id, title, type, unit }) => {

  const pieceImg = `/images/${ id }.jpg`;

  return (
    
    <Card sx={{ display: 'flex',
                flexGrow: 1,
                width: 340,
                borderRadius: 3 }}
    >

      
        <CardActionArea
          href={ `/user/learning/piece/${ id }` }
        >
          <CardMedia
            component="img"
            height="140"
            image={ pieceImg }
            alt={ title }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { title }
            </Typography>
            <Typography sx={{fontFamily: 'Monospace',letterSpacing: 6, lineHeight: 2, fontWeight: 'bold'}} variant="body2" color="text.secondary">
              Tipo { type.toLowerCase() }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Unidad { unit.toLowerCase() }
            </Typography>
          </CardContent>
        </CardActionArea>

    </Card>
    
  );
};
