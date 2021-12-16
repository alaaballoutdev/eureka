import './article.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
