import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Divider, Drawer, Grid, List, Toolbar, Typography } from '@mui/material';
import { DrawerItem } from './DrawerItem';


            

export const DrawerBar = ({ piece }) => {


  const { uds } = useSelector( state => state.crud );

  // const ud = piece.content.map( ud => ud.unit )
  // console.log(ud);

  const pieceImg = `/piano-app/images/${ piece.id }.jpg`;

  return (
    <Drawer
        sx={{
          width: 350,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 350,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >

        <Toolbar
          sx={{ minHeight: {xs: 300} }}
        >
          <Card sx={{ display: 'flex',
                  flexGrow: 1,
                  width: 340,
                  borderRadius: 3 }}
          >

            
              <Grid container
                justifyContent="center"
              >
            
                <CardMedia
                  component="img"
                  height="140"
                  image={ pieceImg }
                  alt={ piece.title }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="black">
                      { piece.title }
                    </Typography>
                  
                  <Typography sx={{fontFamily: 'Monospace',letterSpacing: 6, lineHeight: 2, fontWeight: 'bold'}} variant="body2" color="text.secondary">
                    Tipo { piece.type }
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Unidad { piece.section }
                  </Typography>
                </CardContent>
              </Grid>

          </Card>
        </Toolbar>

        <Divider />

        <Grid container
          justifyContent="center"
          alignItems="center"
          minHeight={50}
        >

          <Link 
            to="/user/learning"
            className="text-decoration"
          >
            <Typography color="black">
              Volver
            </Typography>
          </Link>

        </Grid>


        <Divider />

        <List>
          {uds.map(( ud, index ) => (
            <DrawerItem key={ ud.id } { ...ud } index={ index } />
          ))}
        </List>
      </Drawer>
  );
};
