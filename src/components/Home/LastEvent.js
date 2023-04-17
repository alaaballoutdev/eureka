import {useState,useEffect} from 'react'
import {CardMedia,CardContent,useMediaQuery} from '@mui/material'
import {Link} from 'react-router-dom'
import CardLoading from './CardLoading';
import StyledCard from './StyledCard';

const LastEvent = () => {
  const [event , setEvent]=useState();
  const [loading,setLoading]= useState(true);
  const isTabOrGreater =  useMediaQuery('(min-width:1000px)');

  useEffect(()=>{
    const getCard =async  ()=>{
      setLoading(true);
      await fetch("./json-data/events.json")
      .then(res=>res.json())
      .then(data=>
        setEvent(data
          .events
          .reduce((a,b)=>
            Date.parse(a.date)>Date.parse(b.date)?a:b,{}))  
      )
      .catch(err=>console.log(err));
      setLoading(false);
    }
    getCard();
  },[]);

if(loading){
  return <CardLoading/>
}
if(!loading && !event){
  return <></>
}


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
}

export default LastEvent
