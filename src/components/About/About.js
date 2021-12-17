import {useState,useEffect} from 'react';
import './about.css';
import Typography from '@mui/material/Typography'
const About = () => {
  const [about,setAbout]=useState();
useEffect(()=>{
let isActive=true;
fetch('./json-data/about.json')
.then(res=>res.json())
.then(data=>{
if(isActive)setAbout(data);})
.catch(err=>console.log(err));
return ()=>{
  isActive=false;
}
},[])
if(!about){
  return <center><h3 style={{color:'rgb(100,100,100)'}}>...Loading</h3></center>
}else
    return (
      <>
<img src='./images/home-cover.jpg' width="100%" style={{border:'1px solid blue'}}  alt='i'  />
<center><Typography variant="h5" sx={{mt:3}}>{about.title}</Typography></center>
{about.body.map((a,index)=><p key={index} style={{lineHeight:2,marginRight:'2%',width:'94%',fontSize:20}}>{a}</p>)}
<center><h4>تابعنا عبر صفحاتنا على مواقع التواصل</h4>
<div class="fb-page" data-href="https://www.facebook.com/eurekaulfg3/" data-tabs="timeline" data-width="345" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
</center>
</>
      )
}

export default About
