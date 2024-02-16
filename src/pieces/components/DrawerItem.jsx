import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { setActiveUd } from '../../store/crud/crudSlice';


export const DrawerItem = ({ title = '', body, id, index, videoUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickUd = () => {
        dispatch( setActiveUd({ title, body, id, index, videoUrls }) )
    };

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[ title ]);

  return (
    <ListItem disablePadding>
        {/* <Link
            to={ `/piano-app/user/learning/piece/${ piece.id }/${ text }` }
            className="text-decoration"
        > */}
            <ListItemButton onClick={ onClickUd }>
            <ListItemIcon>
                {index === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
                <ListItemText primary={ newTitle } />
                <ListItemText secondary={ body } />
            </ListItemButton>
        
        {/* </Link> */}
    </ListItem>
  );
};
