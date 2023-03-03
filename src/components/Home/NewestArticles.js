import {useEffect, useState} from 'react'
import NewestArticleByCategory from './NewestArticleByCategory';
import './home.css';
import  civilIcon  from'../../images/civil.svg';
import mechanicalIcon from '../../images/mechanical.svg';
import generalIcon from '../../images/eureka.svg';
import petrolIcon from '../../images/petro.svg';
import telecomIcon from '../../images/telecom.svg'
import {ElectricalServices} from '@mui/icons-material';
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
    <h2 className='section-title'>احدث المقالات</h2>
    <div className='flex-newest-articles'>

      <NewestArticleByCategory article={general} category='مواضيع عامة' icon={generalIcon} />
      <NewestArticleByCategory article={civil} category='مدني' icon={civilIcon}  />
      <NewestArticleByCategory article={mechanical} category='ميكانيك' icon={mechanicalIcon} />
      <NewestArticleByCategory article={petro } category='بتروكيمياء' icon={petrolIcon}  />
      <NewestArticleByCategory article={electrecity} category='كهرباء'materialIcon={<ElectricalServices/>} />
      <NewestArticleByCategory article={telecom} category='اتصالات'  icon={telecomIcon} />

</div>
</div>

)
}

export default NewestArticles
