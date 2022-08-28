import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
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

if(!event){

return <center><h2 style={{color:'rgb(100,100,100)'}}>...loading</h2></center>

}
else{
  return (
    <div className="latest-version">
    <Link to={`/Events/${event.id}`} className="link">
    <Card sx={{width:'97%',margin:'10px'}} className='link-paper' >
      <CardMedia component="img" height="300px" alt="p"  image={event.thumbnail}/>
      <CardContent>
          <Typography gutterBottom variant='h6' color='black' align="right" component='div'>
          {event.title}
          </Typography>
<p>{event.body[0]}</p>
      </CardContent>

</Card>

</Link>
    </div>
  )
}}

export default LastEvent
