import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import NotFound from 'components/NotFound'
import styles from './Event.module.css'
import EventCarousel from './EventCarousel';
import ArticleLoading from 'components/Articles/ArticleLoading';
import FacbookVideo from 'components/Cerebro/FacbookVideo';
const Event = () => {
  const [article , setArticle]=useState();
  const [loading,setLoading] = useState(true);
  const {id }=useParams();
  useEffect(()=>{
    const getArticles = async ()=>{
      setLoading(true);
      await fetch("../json-data/events.json")
      .then(res=>res.json())
      .then(data=>setArticle(data.events.find((art)=> art.id === parseInt(id))))
      .catch(err=>console.log(err));
      setLoading(false);
    }
    getArticles();
  },[id]);

if(loading)
  return <ArticleLoading/>

if(!loading && !article){
  return <NotFound/>
}  
    
return (
  <div className={styles.event}>
    <h1 className={styles.eventTitle}>{article.title}</h1>
    <p className={styles.eventDate}>{article.date}</p>
    <EventCarousel images={article.images}/>
    <div className={styles.eventBody}>
          {article.body.map((b,index)=><p style={{lineHeight:2}} key={index}>{b}</p>)}
    </div>
    <div className={styles.eventVideo}>
        <FacbookVideo link={article.videoUrl}  />
    </div>
    </div>
  )
}

export default Event
