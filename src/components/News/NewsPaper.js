import {useState ,useEffect}from 'react'
import NotFound from '../NotFound'
import Section from '../Articles/Section'
import {useParams} from 'react-router-dom';
import ArticleLoading from 'components/Articles/ArticleLoading';
import styles from  './News.module.css'
const NewsPaper = () => {
const [article , setArticle]=useState();
const [loading,setLoading]= useState(true);
const {id }=useParams();
useEffect(()=>{
  async function fetchData (){
    setLoading(true);
    await fetch("../json-data/news.json")
    .then(res=>res.json())
    .then(data=>
      setArticle(data.news.find(art=>art.id===parseInt(id)))) 
    .catch(err=>console.log(err));
    setLoading(false);
  }
  fetchData();
},[id]);


if(loading){
  return <ArticleLoading/>
}

if(!article&&!loading){
  return <NotFound />
}

return (

    <div className={styles.newsPaper}>
      <h1 className={styles.newsTitle}>{article.title}</h1>
      <p className={styles.newsPaperDate}>{article.date}</p>
      <h4 className={styles.author}>{article.author} </h4>
      <div className={styles.imageWrapper}>
        <img className={styles.newsPaperImage} alt='News Thumbnail' src={article.image} />
      </div>
    <div className={styles.newsPaperImage}>

    {article.body.map((s,index)=>
       <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards}/>
    )}

    </div>
</div>
  )
}

export default NewsPaper;
