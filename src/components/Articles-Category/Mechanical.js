import {useState,useEffect} from 'react'
import ArticleCard from '../Articles/ArticleCard';
import mechanical from '../../images/mechanical.png';
import './categories.css';
const Mechanical = () => {
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
  <div className="mechanical">
  <center>  <div>
  <div className='cover'>
  <img  src={mechanical} alt='mechanical' width='100px'/>

  </div>
{cards.map((a,index)=>{
if(a.category ==='mechanical'){

return  <ArticleCard key={index} art={a}/>}
else{return null}})}

    </div></center>
    </div>
  )
}

export default Mechanical
