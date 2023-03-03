import {useState,useEffect} from 'react'
import {VideoCameraFront,FormatQuote} from '@mui/icons-material';
import Section from '../Articles/Section'
import './magazine.css';
const Interview = () => {
const [interview, setInterview]=useState();

useEffect (()=>{
  fetch('./magazineJson/interview.json')
  .then(res=>res.json())
  .then(data=>setInterview(data));
},[])
if(!interview){
  return <div className="loading"><center><h2 style={{color:'rgb(100,100,100)'}}>...loading</h2></center></div>
}
else

  return (
<div className="inter">
    <div className="cover">
      <VideoCameraFront sx={{width:100,height:100}}/>
    </div>
    <div className="interview">

<center>
    <h1 >{interview.title}</h1>

    <p style={{color:'rgb(100,100,100)'}}>{interview.date}</p>
</center>
<div className='dialog'>
<FormatQuote/>
<p>{interview.dialog}</p>
</div>
<div className='image-wrapper'>
  <img src={interview.image} alt='i' className="initial-image"/>
</div>
<div className="body">

  {interview.body.map((s,index)=>
     <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards} />
   )}
   </div>
    </div>
    </div>
  )
}

export default Interview
