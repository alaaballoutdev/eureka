import {Typography,Paper} from '@mui/material';
import {Link} from 'react-router-dom';
import '../Articles/article.css';

const NewestArticleByCategory = ({article,category,icon,materialIcon}) => {
  
  
  
  const paperStyle={
    padding:2, 
    boxSizing:'border-box',
    width:290, 
    height:370, 
    direction:'rtl', 
    alignContent:'center',
   
  };
  
  if(!article){
    return <></>;
  }
  
  
  
  return (
  <div className='paper-wrapper'>
    <Link to={`/Articles/${article.id}`}  className="link">
      
      <Paper  className="link-paper" sx={paperStyle}>
        
        <div style={{display:'flex'}}>
          
         
          <span style={{marginLeft:5}}>
          { icon? <img  width={30} src={icon} alt='i'/>:materialIcon}
          </span>
            
            <span>
              <Typography  variant='body1'sx={{color:'rgb(100,100,100)'}} >{category}</Typography>
            </span>
        </div>
        
        <h4 style={{marginTop:0,marginBottom:0}}>{article.title}</h4>
        <p style={{color:'rgb(150,150,150)'}}>{article.author}</p>
        <center>
          <img src={article.image} alt='i' width='190'   />
        </center>
    </Paper>
  </Link>
</div>

  )
}

export default NewestArticleByCategory
