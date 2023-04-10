import {useState,useEffect} from 'react';
import {TipsAndUpdates} from '@mui/icons-material';
import IntroLoading from './IntroLoading';
import './magazine.css'

const Introduction = () => {
const [intro,setIntro]=useState();

useEffect(()=>{
  const fetchIntro = async  () =>{
    await fetch('./magazineJson/introduction.json')
    .then((res)=>res.json())
    .then(data=>setIntro(data))
    .catch(err=>console.log(err));
  }

  fetchIntro();


},[])

if(!intro){
return <IntroLoading/>
}


  return (
    <div className="intro">
      <div className="cover"><TipsAndUpdates sx={{height:100,width:100}}/></div>
      <div className="introduction">
        <h1 className='intro-title'>{intro.title}</h1>
        <p className='intro-date'>{intro.date}</p>
        <div className='intro-flex'>
          <div className='crop'>
            <img src={intro.image} alt='Introduction Thumbnail' className='intro-image'/>
          </div> 
          <div className="intro-body">
            {intro.body.map((p,index)=><p key={index}>{p}</p>)}
          </div>
        </div>
      </div>
    </div>
  )}


export default Introduction
