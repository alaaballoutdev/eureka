import {useEffect, useState} from 'react'
import Newest from './Newest';
import './home.css';
import  civilo  from'../../images/civil.png';
import mechanicalo from '../../images/mechanical.png';
import generalo from '../../images/eureka.png';
import petrol from '../../images/petro.png'

const NewestArticles = () => {

  const [cards,setCards]=useState([]);

  useEffect(()=>{
  let isActive=true;
   fetch("./json-data/articles.json").then(res=>res.json()).then(data=>{
if(isActive){
     setCards(data.articles.reverse())}
   })
      .catch(err=>console.log(err));



return ()=>{
  isActive=false;
}

  },[]
  );

  const civil= cards.find((c)=>c.category ==='civil');

  const mechanical=cards.find((c)=>c.category==='mechanical');

  const general=cards.find((c)=>c.category==='general');

  const petro=cards.find((c)=>c.category==='petro');

  const electrecity=cards.find((c)=>c.category==='electrecity');

  const telecom=cards.find((c)=>c.category==='telecom');


  return (



    <div className='flex-newest-articles'>

{general?<Newest art={general} cat='مواضيع عامة' icon={generalo} />:null}
{civil?<Newest art={civil} cat='مدني' icon={civilo}  />:null}
{mechanical?<Newest art={mechanical} cat='ميكانيك' icon={mechanicalo} />:null}
{petro?<Newest art={petro } cat='بتروكيمياء' icon={petrol}  />:null}
{electrecity?<Newest art={electrecity} cat='كهرباء' />:null}
{telecom?<Newest art={telecom} cat='اتصالات'/>:null}

</div>

)
}

export default NewestArticles
