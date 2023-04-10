import {useState ,useEffect}from 'react'
import NotFound from '../NotFound'
import Section from '../Articles/Section'
import {useParams} from 'react-router-dom';
import ArticleLoading from 'components/Articles/ArticleLoading';
import styles from  './News.module.css'
const NewsPaper = () => {
const [articles , setArticles]=useState();

useEffect(()=>{

      let isActive=true;

async function fetchData (){
try{
let res= await fetch("../json-data/news.json")
let data=await res.json();
if(isActive){
    setArticles(data.news);}
}
catch(err){
console.log(err);
}
}
fetchData();
    return ()=>{isActive=false;};
},[setArticles]);

const {id }=useParams();


if(!articles){
  return <ArticleLoading/>
}

const article= articles.find((art)=> art.id === parseInt(id));

if(!article){
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
