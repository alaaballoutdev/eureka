import {useEffect, useState} from 'react'
import NewestArticleByCategory from './NewestArticleByCategory';
import  civilIcon  from'images/civil.svg';
import mechanicalIcon from 'images/mechanical.svg';
import generalIcon from 'images/eureka.svg';
import petrolIcon from 'images/petro.svg';
import telecomIcon from 'images/telecom.svg'
import {ElectricalServices} from '@mui/icons-material';
const NewestArticles = () => {
  const [cards,setCards]=useState([]);
  useEffect(()=>{
    const fetchData= async ()=>{
      await fetch("./json-data/articles.json")
      .then(res=>res.json()).then(data=>{
         setCards(data.articles)
        
        }
      )
      .catch(err=>console.log(err));
      
    }
    fetchData();
  },[]
);

// I use this method because just i fecth data from json file which contains all articles
// When I use database, I can fetch the latest article from each category .
const getLatestArticle=(category)=>{
  return   cards.filter((article)=>article.category===category)
    .reduce((a,b)=>Date.parse(a.date)>Date.parse(b.date)?a:b,{})
    
}


  
  return (
    <div>
    <h2 className='section-title'>احدث المقالات</h2>
    <div className='flex-newest-articles'>

      <NewestArticleByCategory article={getLatestArticle('مواضيع عامة')}  icon={generalIcon} />
      <NewestArticleByCategory article={getLatestArticle('مدني')}  icon={civilIcon}  />
      <NewestArticleByCategory article={getLatestArticle('ميكانيك')} icon={mechanicalIcon} />
      <NewestArticleByCategory article={getLatestArticle('بتروكيمياء')} icon={petrolIcon}  />
      <NewestArticleByCategory article={getLatestArticle('كهرباء')}materialIcon={<ElectricalServices/>} />
      <NewestArticleByCategory article={getLatestArticle('اتصالات')}  icon={telecomIcon} />

</div>
</div>

)
}

export default NewestArticles
