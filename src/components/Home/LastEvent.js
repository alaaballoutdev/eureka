import React,{useState,useEffect} from 'react'
import {Card,CardMedia,CardContent} from '@mui/material'
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
            <h3 >{event.title}</h3>
            <p>{event.body[0]}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}}

export default LastEvent
