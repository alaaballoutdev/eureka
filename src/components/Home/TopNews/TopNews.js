import React,{useState,useEffect} from 'react'
import ListItemNews from 'components/News/ListItemNews';
import {List} from '@mui/material';
import TopNewsLoading from './TopNewsLoading';
const TopNews = () => {
const[news,setNews]=useState();
const [loading,setLoading]=useState(true);
useEffect(()=>{
  const getCard= async ()=> { 
    setLoading(true);
    await fetch("./json-data/news.json")
    .then(res=>res.json())
    .then(data=>{
      data.news.sort((n1,n2)=>{
        return new Date(n2.date)- new Date(n1.date);
      })
      setNews(data.news);
    })
    .catch(err=>console.log(err));
    setLoading(false);
    
  } 
  getCard();

},[]);


if(loading){

return (<TopNewsLoading/>)

}


  return (
<div className="top-news">

  <List >
    {news.map((article)=>
        <ListItemNews key={article.id} article={article} 
          newsArticle={`/News/${article.id}`} />
      )
    }
  </List>
</div>
  )
}

export default TopNews
