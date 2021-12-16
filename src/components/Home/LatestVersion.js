import React,{useEffect,useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const LatestVersion = () => {
const [art,setArt]=useState();
useEffect(()=>{
fetch('./magazineJson/introduction.json').then((res)=>res.json()).then(data=>setArt(data)).catch(err=>console.log(err));



},[])

if(!art){

return <center><h2 style={{color:'rgb(100,100,100)'}}>...loading</h2></center>

}
else
{
  return (
<div className="latest-version">
    <Card sx={{margin:'10px'}} >
      <CardMedia component="img" height="400" alt="p"  image={art.image}/>
      <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
          {art.title}
          </Typography>
          <Typography variant="body1" color='text.secondary'>
          {art.date}
          </Typography>
          <Typography variant="body2" color='text.secondary'>
          {art.body[0]}
          </Typography>
      </CardContent>

      <CardActions>
      <Button variant='contained'>  <a   href='/intro' className="link" style={{color:'white'}}  >اقرأ المزيد</a></Button>
      </CardActions>
      </Card>
</div>
  )
}}

export default LatestVersion
