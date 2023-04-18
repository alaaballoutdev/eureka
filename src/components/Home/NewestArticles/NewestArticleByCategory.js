import {Paper} from '@mui/material';
import {Link} from 'react-router-dom';


import 'react-loading-skeleton/dist/skeleton.css'

const NewestArticleByCategory = ({article,icon}) => {

  const paperStyle={
    padding:2, 
    boxSizing:'border-box',
    width:290, 
    height:370, 
    direction:'rtl', 
    alignContent:'center',
    m:2,
    boxShadow:'0px 0px 10px 1px rgba(0,0,0,0.2)'
  };
  
  
  
return (
  <div className='paper-wrapper'>
    <Link to={`/Article/${article.id}`}  className="link">
      <div >
        <Paper sx={paperStyle}>
          <div className="title-wrapper">
            <span style={{marginLeft:10}}>
             <img  width={30}  height={30} src={icon} alt='i'/>
            </span>
            <span style={{fontSize:14}}>
              {article.tag}
            </span>
          </div>
          <h3 className='paper-title'>{article.title}</h3>
          <h4 className='paper-author'>{article.author}</h4>
          <div className='thumbnail-wrapper'>
            <img src={article.image} alt='Article Thumbnail' width={210} />
          </div>
      </Paper>
    </div>
  </Link>
</div>

  )
}

export default NewestArticleByCategory
