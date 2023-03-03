import ListItem from '@mui/material/ListItem';

import './news.css'
import {Link} from 'react-router-dom';
const ListeItemNews = ({title,date,image,align,newsArticle,body}) => {
  
  return (
    <Link to={newsArticle}
     style={{textDecoration:'none', color:'black'}} >
<div style={{borderStyle:'outset',border:'0.5px solid rgb(245,245,245)',marginBottom:10,backgroundColor:'white'}}>

      <ListItem className="link-news">
        <img alt='a' width="200" height="200" className="news-image" style={{borderRadius:'10px'}}src={image}/>

        <div className='list-item-text' style={{textAlign:align}}>
          <h3 style={{fontSize:15}}>{title}</h3>
          <p>{body[0].paragraph[0]}</p>
          <p className='news-date'>{date}</p>
        </div>


        </ListItem>
      </div>
      </Link>
  )
}

export default ListeItemNews;
