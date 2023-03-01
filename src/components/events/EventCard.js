import Typography from '@mui/material/Typography'
import {Card,CardContent,CardMedia} from '@mui/material';
import {Link} from 'react-router-dom';
import './event.css'
const EventCard = ({event}) => {

  return (
    <Link to={`/Events/${event.id}`} className="link"><div className="cards">

    <Card sx={{maxWidth:400,margin:'10px'}} >
      <CardMedia component="img" height="300px" alt="p"  image={event.thumbnail}/>
      <CardContent>
          <Typography gutterBottom variant='h6' color='black' align="right" component='div'>
          {event.title}
          </Typography>
     <p>{event.body[0].slice(0,100)} ...</p>
      </CardContent>

</Card>

    </div></Link>
  )
}

export default EventCard
