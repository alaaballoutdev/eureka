import React,{useState ,useEffect}from 'react'
import Typography from "@mui/material/Typography";
import Section from './Section'
import './article.css'

import {useParams} from 'react-router-dom';

const Article = () => {
    const {id }=useParams();

    const [articles , setArticles]=useState([]);

    useEffect(()=>{

          let isActive=true;

             fetch("../json-data/articles.json").then(res=>res.json()).then(data=>{
               if(isActive){
                 setArticles(data.articles);}


             }).catch(err=>console.log(err));








        return ()=>{
          isActive=false;
        };
      },[]);

const article= articles.find((art)=> art.id === parseInt(id));


if(!article){
  return <center><h1 style={{color:'rgb(100,100,100)'}}>...Loading</h1></center>
}

else{

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
