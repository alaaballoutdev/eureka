import {useState,useEffect} from 'react';
import {TipsAndUpdates} from '@mui/icons-material';
import './magazine.css'
const Introduction = () => {
const [intro,setIntro]=useState();

useEffect(()=>{
  fetch('./magazineJson/introduction.json').then((res)=>res.json()).then(data=>setIntro(data)).catch(err=>console.log(err));
},[])

if(!intro){

return <div className="loading"><center><h2 style={{color:'rgb(100,100,100)'}}>...loading</h2></center></div>

}
else
{

  return (
    <div className="intro">
      <div className="cover"><TipsAndUpdates sx={{height:100,width:100}}/></div>
        <div className="introduction">
          <h1 className='intro-title'>{intro.title}</h1>
          <p className='intro-date'>{intro.date}</p>
          <div className='intro-flex'>
          <img src={intro.image} alt='i' className='m-image'/>
          <div className="intro-body">
            {intro.body.map((p,index)=><p key={index}>{p}</p>)}
          </div>
        </div>
      </div>
    </div>
  )}
}

export default Introduction
