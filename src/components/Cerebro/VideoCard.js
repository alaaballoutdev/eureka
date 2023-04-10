import {CardMedia,CardContent,Card,useMediaQuery} from '@mui/material';
import FacbookVideo from './FacbookVideo';

const VideoCard = ({videoCard}) => {
  const isMobile = useMediaQuery('(max-width:600px)')
  
  const CardStyle ={
    width: isMobile? 300 : 600,
    margin:'auto',
    mb:15,
    boxShadow:'0px 0px 10px 2px rgb(0,0,0,0.2)'
  }
  
  return (
    <Card sx={CardStyle}>
      <CardContent>
        <p  style={{textAlign:videoCard.align}}>{videoCard.caption}</p>
      </CardContent>
      <CardMedia sx={{height:isMobile?170:340}}>
        <FacbookVideo link={videoCard.url} />
      </CardMedia>
    </Card>

  )
}

export default VideoCard
