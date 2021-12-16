import {useEffect,useState} from 'react'

import faculty from '../../images/faculty.png'
import List from '@mui/material/List';
import ListItemNews from './ListItemNews';

const News = () => {
  const [cards,setCards]=useState([]);
  useEffect(()=>{
  const getCard =  ()=>{
   fetch("./json-data/news.json").then(res=>res.json()).then(data=>setCards(data.news.reverse()))
  .catch(err=>console.log(err));

  }

  getCard();
  },[]
  );

  return (
    <><div className="cover">
    <img  width="100px" height="100px" src={faculty} alt='i' /></div>
    <div style={{marginTop:15}}>

<List

sx={{
        width: '100%',

        bgcolor: 'background.paper',

      }}
>
{cards.map((c, index)=><ListItemNews key={index} title={c.title} date={c.date} newsArticle={`/News/${c.id}`} image={c.image} align={c.align} />)}

</List>


    </div></>
  )
}

export default News
