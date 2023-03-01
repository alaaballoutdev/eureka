import './article.css';
import {Card,CardContent,CardMedia} from '@mui/material';



const ImageCard = ({photo,caption}) => {
  return (
<center><div>
    <Card className="image-card">
    <CardMedia component="img"  alt="" image={photo}  />
    <CardContent>
<h4 >{caption}</h4>

    </CardContent>
</Card></div></center>





  )
}

export default ImageCard
