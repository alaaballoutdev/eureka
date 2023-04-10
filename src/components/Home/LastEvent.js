import {useState,useEffect} from 'react'
import {CardMedia,CardContent,useMediaQuery} from '@mui/material'
import {Link} from 'react-router-dom'
import CardLoading from './CardLoading';
import StyledCard from './StyledCard';

const LastEvent = () => {
  const [event , setEvent]=useState();
  useEffect(()=>{
    const getCard =async  ()=>{
      await fetch("./json-data/events.json").then(res=>res.json()).then(data=>setEvent(data.events[data.events.length-1]))
      .catch(err=>console.log(err));
    }
    getCard();
},[]
);
const isTabOrGreater =  useMediaQuery('(min-width:1000px)');

if(!event){

return <CardLoading/>

}
else{
  return (
    <div className="latest-version">
      <Link to={`/Events/${event.id}`} className="link">
        
          <StyledCard>
            <CardMedia component="img" height={isTabOrGreater?400:200} alt="Thumbnail"  image={event.thumbnail}/>
            <CardContent>
              <h3 >{event.title}</h3>
              <p>{event.body[0]}</p>
            </CardContent>
          </StyledCard>
        
      </Link>
     
    </div>
  )
}}

export default LastEvent
