import { Grid } from '@mui/material';

import pieces from '../data/pieces';
import { PieceCard } from './';

export const PieceList = () => {

  
  return (
    
      <Grid 
        container
        display="flex"
        justifyContent="center"
      >
        {
          pieces.map( piece => (
            <Grid 
              item
              display="flex"
              justifyContent="center"
              margin={4}
              maxWidth={{ xs: 300 }}
              xs={12} sm={6} md={4}
              
              key={ piece.id }
            >
                <PieceCard {...piece}/>
            </Grid>
          ))
        }
      </Grid>
    
  )
}
