import {Card,CardContent,CardMedia} from '@mui/material';
import styles from './article.module.css'


const ImageCard = ({photo,caption}) => {
  return (
    <Card className={styles.imageCard}>
      <CardMedia component="img"  alt="" image={photo}  />
      <CardContent>
        <h4 >{caption}</h4>
      </CardContent>
    </Card>





  )
}

export default ImageCard
