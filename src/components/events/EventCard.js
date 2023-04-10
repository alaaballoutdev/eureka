import {Card,CardContent,CardMedia,useMediaQuery} from '@mui/material';
import {Link} from 'react-router-dom';
import styles from './Event.module.css';
const EventCard = ({event}) => {
const  isMobile  =  useMediaQuery('(max-width:400px)');
const CardStyle= {
  width:isMobile?'90%':400,
  m:isMobile?'auto':1

}


  return (
    <Link to={`/Events/${event.id}`} className={styles.link}>

    <Card sx={CardStyle} >
      <CardMedia component="img" height="300px" alt="Event Thumbnail"  image={event.thumbnail}/>
      <CardContent>
          <h3>{event.title}</h3>
          <p>{event.body[0].slice(0,100)} ...</p>
      </CardContent>

    </Card>

  </Link>
  )
}

export default EventCard
