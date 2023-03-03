import {Card,CardContent,CardMedia} from '@mui/material';
import {Link} from 'react-router-dom';
import './event.css'
const EventCard = ({event}) => {

  return (
    <Link to={`/Events/${event.id}`} className="link"><div className="cards">

    <Card sx={{maxWidth:400,margin:'10px'}} >
      <CardMedia component="img" height="300px" alt="p"  image={event.thumbnail}/>
      <CardContent>
          <h3>{event.title}</h3>
     <p>{event.body[0].slice(0,100)} ...</p>
      </CardContent>

</Card>

    </div></Link>
  )
}

export default EventCard
