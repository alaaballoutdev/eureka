import {useState,useEffect} from 'react'
import Typography from '@mui/material/Typography';
import Section from '../Articles/Section';

import './magazine.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const MagazineFile = () => {
const [article, setArticle]=useState();
useEffect(()=>{
const getArticles = async ()=>{
  await fetch("./magazineJson/magazineFile.json").then(res=>{console.log(res.status);return res.json()}).then(data=>setArticle(data))
  .catch(err=>console.log(err));

}

getArticles();
},[]
);
if(!article){
  return <center><h2 style={{color:'rgb(100,100,100)'}}>...loading</h2></center>
}



  return (
<>
<div className="cover"><AttachFileIcon sx={{width:100,height:100}}/></div>
    <div className="article file"  >

  <center><Typography variant="h4" className="Title">{article.title}</Typography>
  <h4 className="author">{article.author} </h4>
  <img className="initial-image" alt='i' src={article.image} /></center>
  <div className="body">

    {article.body.map((s,index)=>
       <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards} />
     )}</div>
</div></>
  )
}

export default MagazineFile
