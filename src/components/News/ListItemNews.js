import {ListItem} from '@mui/material';
import {Link} from 'react-router-dom';
import styles from './ListItemNews.module.css'

const ListeItemNews = ({article,newsArticle}) => {
  
  const listItemStyle = {
    backgroundColor:'white',
    margin: 'auto',
    mb:1,
    boxSizing:'border-box',
    width:'90%',
    boxShadow:'0px 0px 10px 1px rgba(0,0,0,0.2)'
    
  }

  return (
    <Link to={newsArticle} className={styles.linkNews} >
        
          <ListItem sx={listItemStyle} alignItems='flex-start' className={styles.newsCard}>
            <img alt='News' width={200} height={200} className={styles.newsImage} src={article.image}/>
            <div style={{textAlign:article.align}}>
              <h3>{article.title}</h3>
              <p>{article.body[0].paragraph[0].substring(0,200)}</p>
              <p className={styles.newsDate}>{article.date}</p>
            </div>
          </ListItem>
      
    </Link>
  )
}

export default ListeItemNews;
