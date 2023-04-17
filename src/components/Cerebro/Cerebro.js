import {useEffect,useState} from 'react'
import VideoCard from './VideoCard';
import styles from './Cerebro.module.css'
import CerebroLoading from './CerebroLoading';
const Cerebro = () => {
  const [cards,setCards]=useState();
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const getCard = async  ()=>{
      setLoading(true);
      await fetch("./json-data/cerebro.json")
      .then(res=>res.json())
      .then(data=>setCards(data.videos))
      .catch(err=>console.log(err));
      setLoading(false);
    }
    getCard();
  },[]
  );

  if(loading){
    return <CerebroLoading/>
  }
  if(!loading&&!cards){
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
