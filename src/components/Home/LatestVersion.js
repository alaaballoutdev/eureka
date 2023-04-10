import {useEffect,useState} from 'react'
import {CardActions,CardContent,CardMedia,Button} from '@mui/material';
import CardLoading from './CardLoading';
import StyledCard from './StyledCard';

const LatestVersion = () => {
const [art,setArt]=useState();
const [loading,setLoading] =useState(true);


useEffect(()=>{
  async function fetchInroduction(){
    await fetch('./magazineJson/introduction.json')
      .then((res)=>res.json())
      .then(data=>setArt(data))
      .catch(err=>console.log(err));
      setLoading(false);
  } 
  fetchInroduction();
  

},[])





if(loading){

return <CardLoading/>

}

 return (
    <div className="latest-version">
      <StyledCard >
        <CardMedia component="img" height={400} alt="Latest Version"  image={art.image}/>
        <CardContent>
            <h3>{art.title}</h3>
            <p>{art.date}</p>
            <p>{art.body[0]}</p>
        </CardContent>

        <CardActions>
          <Button variant='contained'>  
            <a   href='/intro' className="link" style={{color:'white'}}  >اقرأ المزيد</a>
          </Button>
        </CardActions>
      </StyledCard>
  </div>
  )
}

export default LatestVersion
