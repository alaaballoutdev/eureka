import React,{useState ,useEffect}from 'react'
import Section from './Section'
import NotFound from '../NotFound'
import {useParams} from 'react-router-dom';
import ArticleLoading from './ArticleLoading';
import styles from './article.module.css'

const Article = () => {
  const {id }=useParams();
  const [article , setArticle]=useState();
  const [loading,setLoading] =  useState(true);
  useEffect(()=>{
    setLoading(true);
    async function fetchData (){
      await fetch("../json-data/articles.json")
      .then(res=>res.json())
      .then(data=> 
        setArticle(data.articles
          .find( art => art.id === parseInt(id))))
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
    <>
        <h1>{article.title}</h1>
        <p className={styles.author}>{article.author}</p>
        <div className={styles.imageWrapper}>
          <img className={styles.thumbnail} alt='thumbnail' src={article.image} />
        </div>
          {article.body.map((section,index)=>
            <Section key={index} paragraph={section.paragraph} subtitle={section.subtitle} imagesCards={section.imagesCards} />
                )}
        
    </>

)}


export default Article;
