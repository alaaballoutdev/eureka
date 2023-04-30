import {Card, CardMedia,CardContent,CardActions,Button}from '@mui/material';

const ArticleCard = ({art}) => {
  const CardStyle ={
    maxWidth:300,
    m:3
  }
  const CardContentStyle={
    height:139,
    overflow:'hidden'
  }
  
  
  return (

    
      <Card sx={CardStyle} >
        <CardMedia component="img" height="150px" alt="p"  image={art.image}/>
        <CardContent sx={CardContentStyle}>
          <h4>{art.title}</h4>
          <p>{art.body[0].paragraph[0]}</p>
        </CardContent>
        <CardActions >
          <Button>  
            <a href={`/Article/${art.id}`} className="link">اقرأ المزيد</a>
          </Button>
        </CardActions>
      </Card>

  )
}

export default ArticleCard
