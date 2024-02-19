import { Grid } from '@mui/material';
import ReactPlayer from 'react-player';


export const VideoDisplay = ({ video }) => {

  // let uuid = self.crypto.randomUUID();

  return (
    <Grid container
      
    >
      {
        video?.map( url => (

          <ReactPlayer
            key={ url }
            url={ url } 
            controls
          />
        ))
      }
        
    </Grid>
  );
};
