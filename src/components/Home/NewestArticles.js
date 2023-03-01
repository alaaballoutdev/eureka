import {useEffect, useState} from 'react'
import NewestArticleByCategory from './NewestArticleByCategory';
import { Typography } from '@mui/material';
import './home.css';
import  civilIcon  from'../../images/civil.png';
import mechanicalIcon from '../../images/mechanical.png';
import generalIcon from '../../images/eureka.png';
import petrolIcon from '../../images/petro.png'
import {ElectricalServices,Cast} from '@mui/icons-material';
const NewestArticles = () => {
  const [cards,setCards]=useState([]);
  useEffect(()=>{
    let isActive=true;
    const fetchData=async ()=>{
      
     await fetch("./json-data/articles.json").then(res=>res.json()).then(data=>{
      
        if(isActive){
        setCards(data.articles.reverse())}
      }).catch(err=>console.log(err));
  

    }
   fetchData();

    return ()=>{
      isActive=false;
    }


  },[]
  );

  const civil=  cards.find((c)=>c.category ==='civil');

  const mechanical=cards.find((c)=>c.category==='mechanical');

  const general=cards.find((c)=>c.category==='general');

  const petro=cards.find((c)=>c.category==='petro');

  const electrecity=cards.find((c)=>c.category==='electrecity');

  const telecom=cards.find((c)=>c.category==='telecom');


  return (
    <div>
    <Typography variant='h5' sx={{mt:3,mr:1}}>احدث المقالات</Typography>
    <div className='flex-newest-articles'>

      <NewestArticleByCategory article={general} category='مواضيع عامة' icon={generalIcon} />
      <NewestArticleByCategory article={civil} category='مدني' icon={civilIcon}  />
      <NewestArticleByCategory article={mechanical} category='ميكانيك' icon={mechanicalIcon} />
      <NewestArticleByCategory article={petro } category='بتروكيمياء' icon={petrolIcon}  />
      <NewestArticleByCategory article={electrecity} category='كهرباء' materialIcon={<Cast/>} />
      <NewestArticleByCategory article={telecom} category='اتصالات' materialIcon={<ElectricalServices/>}/>

</div>
</div>

)
}

export default NewestArticles
