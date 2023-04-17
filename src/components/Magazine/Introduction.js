import {useState,useEffect} from 'react';
import {TipsAndUpdates} from '@mui/icons-material';
import IntroLoading from './IntroLoading';
import './magazine.css'
import NotFound from 'components/NotFound';

const Introduction = () => {
const [intro,setIntro]=useState();
const [loading,setLoading]=useState(true);
useEffect(()=>{
  const fetchIntro = async  () =>{
    setLoading(true);
    await fetch('./magazineJson/introduction.json')
    .then((res)=>res.json())
    .then(data=>setIntro(data))
    .catch(err=>console.log(err));
    setLoading(false);
  }

  fetchIntro();


},[])

if(loading){
return <IntroLoading/>
}
if(!loading && !intro){
  return <NotFound/>
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
