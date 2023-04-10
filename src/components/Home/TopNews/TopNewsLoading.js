import Skeleton from 'react-loading-skeleton'
import {ListItem,useMediaQuery} from '@mui/material';
const TopNewsLoading = () => {
  
  const listItemStyle = {
    mb:1,
    backgroundColor:'white',
    margin: 'auto',
    boxSizing:'border-box'
  }

  const isMobile = useMediaQuery('(max-width:850px)');
  const textSkeletonWidth=isMobile?180:600;
  
  return (
    <ListItem sx={listItemStyle} alignItems='flex-start' className='news-card'>
      <Skeleton width={isMobile?90:200} height={isMobile?70:200} className="news-image"/>
      <div className='list-item-text' style={{textAlign:'right'}}>
          <Skeleton width={100} height={35}/>
          <Skeleton width={textSkeletonWidth} height={30}/>
          <Skeleton width={textSkeletonWidth} height={30}/>
          <Skeleton width={textSkeletonWidth} height={30}/>
          <Skeleton width={textSkeletonWidth} height={30}/>
          <Skeleton width={100} height={25}/>
      </div>
    </ListItem>
  
  )
}

export default TopNewsLoading
