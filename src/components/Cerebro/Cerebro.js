import {useEffect,useState} from 'react'
import VideoCard from './VideoCard';
import styles from './Cerebro.module.css'
import CerebroLoading from './CerebroLoading';
const Cerebro = () => {

  const [cards,setCards]=useState();
  useEffect(()=>{
  const getCard = async  ()=>{
    
    await fetch("./json-data/cerebro.json").then(res=>res.json()).then(data=>setCards(data.videos))
  .catch(err=>console.log(err));
    
  }

  getCard();
  },[]
  );


if(!cards){
  return <CerebroLoading/>
}
  return (
    <div className={styles.cerebro}>
      <h1 className={styles.title}>أعمال فريق"CEREBRO"</h1>
      {cards.map((videoCard,index)=>
        <VideoCard key={index} videoCard={videoCard} />
      )}
    </div>



  )
}

export default Cerebro
