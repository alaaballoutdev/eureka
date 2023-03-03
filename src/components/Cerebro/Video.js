import ReactPlayer from 'react-player/facebook';
import {CardMedia,CardContent,Card} from '@mui/material';
import './cerebro.css'

const Video = ({url,caption}) => {
  return (
  
    <Card  className='video-card'  elevation={3}>
    <CardContent>
      <p className="video-caption">{caption}</p>
    </CardContent>
    
    <CardMedia>
      <ReactPlayer url={url} controls wrapper='div'  width="100%"height='100%' className='videos'/>
    </CardMedia>
  
</Card>

  )
}

export default Video
