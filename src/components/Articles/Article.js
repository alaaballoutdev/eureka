import React,{useState ,useEffect}from 'react'
import Typography from "@mui/material/Typography";
import Section from './Section'
import NotFound from '../NotFound'
import './article.css'

import {useParams} from 'react-router-dom';

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
        return <div className="loading"><center><h1 style={{color:'rgb(100,100,100)'}}>...Loading</h1></center></div>
      }
else{
const article= articles.find((art)=> art.id === parseInt(id));

if(!article){
  return <NotFound />
}




  return (


    <div className="article">

      <center>
        <Typography variant="h4" className="Title">{article.title}</Typography>
        <h4 className="author">{article.author} </h4>
        <img className="initial-image" alt='i' src={article.image} />
      </center>
        <div className="body">
              {article.body.map((s,index)=>
                <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards} />
                )}
        </div>
    </div>

)}
}

export default Article;
