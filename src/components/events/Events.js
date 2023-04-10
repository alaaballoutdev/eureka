import {useState,useEffect} from 'react'
import EventCard  from './EventCard';
import styles from './Event.module.css'
import EventCardsLoading from './EventCardsLoading';

const Events = () => {
  const [cards,setCards]=useState();
  useEffect(()=>{
  const getCard = async ()=>{
  await fetch("./json-data/events.json")
    .then(res=>res.json())
    .then(data=>setCards(data.events.reverse()))
    .catch(err=>console.log(err));
  }
  getCard();
},[]);


if(!cards){
return <EventCardsLoading />
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
