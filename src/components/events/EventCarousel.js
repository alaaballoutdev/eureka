import { Carousel } from "react-carousel-minimal"
import { useMediaQuery } from "@mui/material"
const EventCarousel = ({images}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <Carousel
      data={images} time={4000}
      radius="10px" slideNumber={false}
      automatic={true} dots={true}
      pauseIconColor="white" pauseIconSize="40px"
      slideBackgroundColor="black" slideImageFit="cover"
      thumbnails={true} thumbnailWidth="100px"
      style={{
        width:isMobile?'90%':600,
        margin: "40px auto",
        direction:'ltr'
      }} />




  )
}

export default EventCarousel
