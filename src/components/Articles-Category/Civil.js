import {useEffect,useState} from 'react'
import ArticleCard from '../Articles/ArticleCard';
import './categories.css';

import civil from '../../images/civil.svg'
const Civil = () => {

  const [cards , setCards]=useState();
    useEffect(()=>{
    const getCards =async  ()=>{
       await fetch("../json-data/articles.json",{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(res=>res.json()).then(data=>
        setCards(data.articles))
      .catch(err=>console.log(err));

    }

    getCards();
    },[]
    );
    if(!cards){

    return <div className="loading"><center><h3 >Loading...</h3></center></div>

    }


    else{




  return (
<div  className="civil">
<center>    <div>

<div className='cover'>
<img style={{marginTop:3}} src={civil} alt='civil' width='90px' height="80px"/>

</div>

{cards.map((a,index)=>{
if(a.category ==='civil'){

return  <ArticleCard key={index} art={a}/>}
else{return null}})}

    </div></center></div>
  )
}
}
export default Civil
