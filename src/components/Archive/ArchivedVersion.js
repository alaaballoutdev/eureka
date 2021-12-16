import React from 'react';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ArchivedVersion = ({version}) => {
  return (
    <a href={`../Archive/${version.name}`} className="link"><div className="cards">

  <Card sx={{maxWidth:400,margin:'10px'}}  >
    <CardMedia component="img" height="300px" alt="p"  image={version.thumbnail}/>
    <CardContent>
        <Typography gutterBottom variant='h6' color='black' align="center" component='div'>
        {version.title}        </Typography>
        <Typography gutterBottom variant='body2' color='text.secondary' align="center" component='div'>
      {version.date}
</Typography>
    </CardContent>

</Card>

  </div></a>
  )
}

export default ArchivedVersion
