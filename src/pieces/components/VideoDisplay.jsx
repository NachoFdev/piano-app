

export const VideoDisplay = ({ video }) => {
  return (
    <div className='vid'>
        
            {
                video.map( url => (
                    <video key={url} loop autoPlay muted>
                        <source
                            src={ url }
                            type="video/mp4"
                            alt="Video"
                        />
                    </video>
                ))
            }
        
    </div>
  );
};
