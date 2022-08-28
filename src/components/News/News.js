import {useEffect,useState} from 'react'

import faculty from '../../images/faculty.png'
import List from '@mui/material/List';
import ListItemNews from './ListItemNews';

const News = () => {
  const [cards,setCards]=useState();
  useEffect(()=>{
  const getCard =  ()=>{
   fetch("./json-data/news.json").then(res=>res.json()).then(data=>setCards(data.news.reverse()))
  .catch(err=>console.log(err));

  }

  getCard();
  },[]
  );
if(!cards){
  return  <div className="loading"><center><h3 style={{color:'rgb(100,100,100)'}}>...Loading</h3></center></div>
}
  return (
    <div className="c"><div className="cover" style={{padding:10}}>
    <img  width="100px" height="100px" src={faculty} alt='i' /></div>
    <div style={{marginTop:15}}>

<List

sx={{
        width: '100%',

        bgcolor: 'background.paper',

      }}
>
{cards.map((c, index)=><ListItemNews key={index} title={c.title} date={c.date} newsArticle={`/News/${c.id}`} image={c.image} body={c.body} align={c.align} />)}

</List>


    </div></div>
  )
}

export default News
