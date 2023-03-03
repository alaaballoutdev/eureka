import {useState,useEffect} from 'react'
import ArticleCard from '../Articles/ArticleCard';
import eureka from '../../images/eureka.svg';
import './categories.css';
const General = () => {
  const [cards , setCards]=useState();
    useEffect(()=>{
    const getCards = async ()=>{
      await fetch("../json-data/articles.json").then(res=>res.json()).then(data=>{
        setCards(data.articles);})
      .catch(err=>console.log(err));

    }

    getCards();
    },[]
    );

    if(!cards){

    return <div className="loading"><center><h3 >Loading...</h3></center></div>

    }

  return (
<div className="general">
  <center>  <div>
  <div className='cover'>
  <img  src={eureka} alt='general' width='100px'/>

  </div>
{cards.map((a,index)=>{
if(a.category ==='general'){

return  <ArticleCard key={index} art={a}/>}
else{return null}})}

    </div></center>
    </div>
  )
}

export default General
