import React,{useState,useEffect} from 'react'
import ListItemNews from '../News/ListItemNews';
import List from '@mui/material/List';
import './home.css';
const TopNews = () => {
const[news,setNews]=useState();
useEffect(()=>{
  const getCard= async ()=> { 
    await fetch("./json-data/news.json").then(res=>res.json()).then(data=>{setNews(data.news.reverse())})
    .catch(err=>console.log(err));
  }
  getCard();

},[]);


if(!news){

return (<center><h4 style={{color:'rgb(100,100,100)'}}>...Loading</h4></center>)

}

  return (
<div className="top-news">

  <List
    sx={{
          width: '100%',
          padding:0,
          bgcolor: 'rgb(245,245,245)',
        }}
  >
              {news.map((n,index)=>{
                    if(index<6){
                        return <ListItemNews
                                  key={index}
                                  title={n.title}
                                  date={n.date}
                                  newsArticle={`/News/${n.id}`}
                                  image={n.image}
                                  align={n.align}
                                  body={n.body}
                                  />

                                }
                              else{return null}})}
  </List>
</div>
  )
}

export default TopNews
