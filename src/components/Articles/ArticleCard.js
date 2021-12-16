import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import './article.css';

import Button from '@mui/material/Button'


const ArticleCard = ({art}) => {
  return (
<div className="cards">
  <Card sx={{maxWidth:300,margin:'10px'}} >
    <CardMedia component="img" height="150px" alt="p"  image={art.image}/>
    <CardContent sx={{height:139,overflow:'hidden'}}>
        <Typography gutterBottom variant='h5' component='div'>
        {art.title}
        </Typography>
        <Typography variant="body2" color='text.secondary'>
        {art.body[0].paragraph[0]}
        </Typography>
    </CardContent>

    <CardActions >
    <Button>  <Link   to={`/Articles/${art.id}`}  className="link">اقرأ المزيد</Link></Button>
    </CardActions>
    </Card>
</div>
  )
}

export default ArticleCard
