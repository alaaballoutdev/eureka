import Skeleton from 'react-loading-skeleton'
import { Paper } from '@mui/material';

const NewestArticlesLoading = () => {
  
    const paperStyle={
      padding:2, 
      boxSizing:'border-box',
      width:290, 
      height:370, 
      direction:'rtl', 
      alignContent:'center',
      m:2
       
      };  
  
return (
    <div className='paper-wrapper'>
      <Paper  className="link-paper" sx={paperStyle}>
        <div className='title-wrapper'>
          <span style={{marginLeft:10}}>
            <Skeleton circle width={20}/>
          </span>
          <span>
            <Skeleton width={50}/>
          </span>
        </div>
        <Skeleton width={270} height={20} count={2}/>
        <Skeleton width={250} />
        <div className='thumbnail-wrapper'>
          <Skeleton width={210} height={140}/>
        </div>
      </Paper>
    </div>
  )
}

export default NewestArticlesLoading
