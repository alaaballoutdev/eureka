import ReactPlayer from 'react-player/facebook';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import './cerebro.css'
const Video = ({url,caption}) => {
  return (
<div className="video-card">
<Card  className='video-card'  elevation={3}>
<CardContent><Typography variant='body1' fontSize={20} >{caption}</Typography></CardContent>
<center><CardMedia>
<ReactPlayer url={url} controls wrapper='div'  width="100%"height='100%' className='videos'/></CardMedia></center>
</Card>


</div>
  )
}

export default Video
