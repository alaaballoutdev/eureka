import React,{useState ,useEffect}from 'react'
import Section from './Section'
import NotFound from '../NotFound'
import './article.css'
import {useParams} from 'react-router-dom';
import ArticleLoading from './ArticleLoading';

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
    <div className="article">
        <h1 className="title">{article.title}</h1>
        <h4 className="author">{article.author}</h4>
        <div className='image-wrapper'>
          <img className="initial-image" alt='thumbnail' src={article.image} />
        </div>
        <div className="body">
              {article.body.map((s,index)=>
                <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards} />
                )}
        </div>
    </div>

)}


export default Article;
