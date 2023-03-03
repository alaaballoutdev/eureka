import {useState,useEffect} from 'react'
import ArticleCard from '../Articles/ArticleCard';
import telecomIcon from '../../images/telecom.svg'
import './categories.css';
const Telecom = () => {
  const [cards , setCards]=useState();
    useEffect(()=>{
    const getCards = async  ()=>{
       await fetch("../json-data/articles.json",{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(res=>res.json()).then(data=>setCards(data.articles))
      .catch(err=>console.log(err));

    }

    getCards();
    },[]
    );

    if(!cards){

    return <div className="loading"><center><h3 >Loading...</h3></center></div>

    }




  return (
<div className="telecom">
  <center>  <div>
    <div className='cover'>
    <img src={telecomIcon} width={100} alt='telecom' height={100}/>
</div>
{cards.map((a,index)=>{
if(a.category ==='telecom'){

return  <ArticleCard key={index} art={a}/>}
else{return null}})}


    </div></center>
    </div>
  )
}

export default Telecom
