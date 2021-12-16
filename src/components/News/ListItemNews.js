import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './news.css'
const ListeItemNews = ({title,date,image,newsArticle,align}) => {
  return (
    <a href={newsArticle}
     style={{textDecoration:'none', color:'black'}} >
<div style={{borderStyle:'outset',border:'0.5px solid rgb(245,245,245)',marginBottom:10,backgroundColor:'white'}}>

      <ListItem className="link-news">
        <img alt='a' width="200" height="200" className="news-image" style={{borderRadius:'10px'}}src={image}/>


          <ListItemText  secondary={date}  align={align} sx={{mr:4,fontSize:15}} ><p style={{fontSize:15}}>{title}</p></ListItemText>

        </ListItem>
      </div>
      </a>
  )
}

export default ListeItemNews;
