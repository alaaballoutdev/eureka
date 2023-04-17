import {useEffect,useState} from 'react'
import List from '@mui/material/List';
import ListItemNews from './ListItemNews';
import styles from './News.module.css'
import NewsLoading from './NewsLoading';
const News = () => {
  const [cards,setCards]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const getCard = async ()=>{
      setLoading(true);
      await fetch("./json-data/news.json")
      .then(res=>res.json())
      .then(data=>setCards(data.news.reverse()))
      .catch(err=>console.log(err));
      setLoading(false);
    }
    getCard();
  },[]);
const listStyle= {
  width: '100%',
  bgcolor: 'background.paper',
}
if(loading){
  return <NewsLoading/>
}


  return (
    <div className={styles.newsPage}>
      <h1 className={styles.title}>أخبار الكلية</h1>     
      
        <List sx={listStyle}>
          {cards.map(card=>
            <ListItemNews key={card.id} article={card} newsArticle={`/News/${card.id}`}  />)
          }
        </List>
      
    </div>
  )
}

export default News
