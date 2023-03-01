import {Card, CardMedia,CardContent,CardActions,Typography,Button}from '@mui/material';
import './article.css';




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
    <Button>  <a   href={`/Articles/${art.id}`}  className="link">اقرأ المزيد</a></Button>
    </CardActions>
    </Card>
</div>
  )
}

export default ArticleCard
