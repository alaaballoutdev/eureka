import React,{useState,useEffect} from 'react'
import ListItemNews from 'components/News/ListItemNews';
import {List} from '@mui/material';
import TopNewsLoading from './TopNewsLoading';
const TopNews = () => {
const[news,setNews]=useState();
useEffect(()=>{
  const getCard= async ()=> { 
    await fetch("./json-data/news.json")
    .then(res=>res.json())
    .then(data=>{
      setNews(data.news.reverse())
    })
    .catch(err=>console.log(err));
    
  } 
  getCard();

},[]);


if(!news){

return (<TopNewsLoading/>)

}


  return (
<div className="top-news">

  <List >
    {news.slice(0,2).map((article)=>
        <ListItemNews key={article.id} article={article} 
          newsArticle={`/News/${article.id}`} />
      )
    }
  </List>
</div>
  )
}

export default TopNews
