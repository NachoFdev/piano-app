import { Card, CardContent, CardMedia, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const ud = ['Unidad didáctica 1',
            'Unidad didáctica 2',
            'Unidad didáctica 3',
            'Unidad didáctica 4',
            'Unidad didáctica 5',
            'Unidad didáctica 6',
            'Unidad didáctica 7',
            'Unidad didáctica 8',
            'Unidad didáctica 9',
            'Unidad didáctica 10',
            'Unidad didáctica 11',
            'Unidad didáctica 12',
            'Unidad didáctica 13',
            'Unidad didáctica 14',
            'Unidad didáctica 15']

            

export const DrawerBar = ({ piece }) => {


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
                    Unidad { piece.unit }
                  </Typography>
                </CardContent>
              </Grid>

          </Card>
        </Toolbar>

        <Divider />

        <List>
          {ud.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
};
