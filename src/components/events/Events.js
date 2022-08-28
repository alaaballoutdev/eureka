import {useState,useEffect} from 'react'
import EventCard  from './EventCard';
import EventIcon from '@mui/icons-material/Event';
import './event.css';
const Events = () => {
  const [cards,setCards]=useState();
  useEffect(()=>{
  const getCard =  ()=>{
   fetch("./json-data/events.json").then(res=>res.json()).then(data=>setCards(data.events.reverse()))
  .catch(err=>console.log(err));

  }

  getCard();

  },[]
  );
if(!cards){
  return <div className="loading"><center><h3 style={{color:"rgb(100,100,100)"}}>...loading</h3></center></div>
}
else{

  return (
<div className="events">
<center>
  <div className="cover">
    <EventIcon color="primary"sx={{height:100,width:100}}/>
  </div>

        <div className="events">
            {cards.map((e,index)=><EventCard key={index} event={e} />)}
        </div>
</center>
</div>
  )
}
}
export default Events
