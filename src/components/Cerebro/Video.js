import ReactPlayer from 'react-player/facebook';
import {Typography,CardMedia,CardContent,Card} from '@mui/material';
import './cerebro.css'

const Video = ({url,caption}) => {
  return (
<div className="video-card">
<Card  className='video-card'  elevation={3}>
  <CardContent>
    <Typography variant='body1' fontSize={20} >{caption}</Typography>
  </CardContent>
  <center>
    <CardMedia>
      <ReactPlayer url={url} controls wrapper='div'  width="100%"height='100%' className='videos'/>
    </CardMedia>
  </center>
</Card>


</div>
  )
}

export default Video
