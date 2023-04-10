import React,{useState ,useEffect}from 'react'
import Section from './Section'
import NotFound from '../NotFound'
import './article.css'

import {useParams} from 'react-router-dom';
import ArticleLoading from './ArticleLoading';

const Article = () => {
    const {id }=useParams();

    const [articles , setArticles]=useState();

    useEffect(()=>{

          let isActive=true;

async function fetchData (){
try{
  let res= await fetch("../json-data/articles.json")
  let data=await res.json();
  if(isActive){
        setArticles(data.articles);}
  }
  catch(err){
    console.log(err);
  }
  }
  fetchData();
        return ()=>{isActive=false;};
},[setArticles]);


if(!articles){
  return <ArticleLoading/>
}

const article= articles.find((art)=> art.id === parseInt(id));

if(!article){
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
