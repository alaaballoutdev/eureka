import {useState,useEffect} from 'react'
import EventCard  from "./EventCard";
import styles from './Event.module.css'
import EventCardsLoading from "./EventCardsLoading";
import NotFound from 'components/NotFound';

const Events = () => {
  const [cards,setCards]=useState();
  const [loading,setLoading] =useState(true);
  useEffect(()=>{
  const getCard = async ()=>{
    setLoading(true);
    await fetch("./json-data/events.json")
      .then(res=>res.json())
      .then(data=>setCards(data.events.reverse()))
      .catch(err=>console.log(err));
    setLoading(false);  
  }
  getCard();
},[]);

if(loading){
  return <EventCardsLoading/>
}

if(!loading && !cards){
  return <NotFound/>
}


return (
  <>
    <h1 className={styles.title}>نشاطات الكلية</h1>
    <div className={styles.events}>
      {cards.map((e,index)=><EventCard key={index} event={e} />)}
    </div>
  </>
  )
}

export default Events
