import {useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import './magazine.css'
const Introduction = () => {
const [intro,setIntro]=useState();

useEffect(()=>{
  fetch('./magazineJson/introduction.json').then((res)=>res.json()).then(data=>setIntro(data)).catch(err=>console.log(err));
},[])

if(!intro){

return <center><h2 style={{color:'rgb(100,100,100)'}}>...loading</h2></center>

}
else
{

  return (
<><div className="cover"><TipsAndUpdatesIcon sx={{height:100,width:100}}/></div>
    <div className="introduction">

<center><Typography align='center'variant="h4" >{intro.title}</Typography>
<Typography variant='body1'align='center'>{intro.date}</Typography></center>
<div className='intro-flex'>


<img src={intro.image} alt='i' className='m-image'/>
<div className="intro-body">
{intro.body.map((p,index)=><p key={index}>{p}</p>)}
</div>
</div>


    </div></>
  )}
}

export default Introduction
