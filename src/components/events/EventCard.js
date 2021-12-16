import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link} from 'react-router-dom';
import './event.css'
const EventCard = ({event}) => {

  return (
    <Link to={`/Events/${event.id}`} className="link"><div className="cards">

    <Card sx={{maxWidth:400,margin:'10px'}} className='link-paper' >
      <CardMedia component="img" height="300px" alt="p"  image={event.thumbnail}/>
      <CardContent>
          <Typography gutterBottom variant='h6' color='black' align="right" component='div'>
          {event.title}
          </Typography>

      </CardContent>

</Card>

    </div></Link>
  )
}

export default EventCard
