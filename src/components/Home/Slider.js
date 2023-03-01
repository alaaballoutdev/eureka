import { useMediaQuery } from '@mui/material';
import { Carousel } from 'react-carousel-minimal';

const Slider = ({images}) => {
    const  isMobile = useMediaQuery('(max-width:1000px)');
return (
    <Carousel
        data={images} time={10000}
        
        width={isMobile?'100%':270} 
        
        radius={10} slideNumber={false} 
        
        automatic={true} dots={false}
        
        pauseIconColor="white" pauseIconSize={30}
        
        slideBackgroundColor="white" slideImageFit="contain"
        
        thumbnails={false} className='slider'
        style={{
            direction:'ltr',
            boxShadow:'0px 0px 10px 1px rgb(100,100,100)',
            boxSizing:'border-box',
            width: isMobile?'100%':270
          

        }}

          />
  )
}

export default Slider
