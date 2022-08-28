import {useState,useEffect} from 'react';
import './about.css';
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
  return <div className="loading"><center><h3 style={{color:'rgb(100,100,100)'}}>...Loading</h3></center></div>
}else
    return (
      <div className="about">

<center><h1>{about.title}</h1>
<img src='./images/about.jpeg' alt='i' width="50%" className="about-image"/>


</center>
{about.body.map((a,index)=><p key={index}  className="about-body">
{a.includes(":")?
<><b>{`${a.split(":")[0]}`}</b>{`${a.split(":")[1]}`}</>
:a  }
</p>)}
<center><h4 >تابعنا عبر صفحاتنا على مواقع التواصل</h4>

<div
className="fb-page"
data-href="https://www.facebook.com/eurekaulfg3/"
data-tabs="timeline"
data-width="345"
data-height="400"
data-small-header="false"
data-adapt-container-width="true"
data-hide-cover="false"
data-show-facepile="true"></div>

</center>
</div>
      )
}

export default About
