import {useState ,useEffect}from 'react'
import Typography from "@mui/material/Typography";

import Section from '../Articles/Section'
import {useParams} from 'react-router-dom';

const NewsPaper = () => {
const [articles , setArticles]=useState([]);

useEffect(()=>{
const getArticles = async ()=>{
  await fetch("../json-data/news.json")
  .then(res=>res.json())
  .then(data=>setArticles(data.news))
  .catch(err=>console.log(err));
  }

  getArticles();
  },[]
  );

const {id }=useParams();
const article =  articles.find((art)=> art.id === parseInt(id));



if(!article){
return (<center><h2 style={{color:'rgb(100,100,100)'}}>...loading</h2></center>)


}
else{

  return (

    <div className="article">

      <center>
      <Typography variant="h4" >{article.title}</Typography>
      <Typography variant="body2" sx={{color:'rgb(100,100,100)'}}>{article.date}</Typography>
      <h4 className="author">{article.author} </h4>
      <img className="initial-image" alt='i' src={article.image} /></center>
    <div className="body">

    {article.body.map((s,index)=>
       <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards}/>
    )}

    </div>
</div>
  )
}
}
export default NewsPaper;
