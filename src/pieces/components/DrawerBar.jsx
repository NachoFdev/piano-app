import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
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

            

export const DrawerBar = ({ drawerWidth }) => {
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
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
