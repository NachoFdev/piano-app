import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


export const PieceCard = ({ id, title, type, unit }) => {

  const pieceImg = `/piano-app/images/${ id }.jpg`;

  return (
    <Card sx={{ display: 'flex',
                flexGrow: 1,
                width: 340,
                border: 'solid',
                borderRadius: 3 }}>
      <CardActionArea>
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
  )
}
