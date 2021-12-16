import {useState,useEffect} from 'react'
import petro from '../../images/petro.png';
import ArticleCard from '../Articles/ArticleCard'
const Petro = () => {
  const [cards , setCards]=useState([]);
    useEffect(()=>{
    const getCards =async  ()=>{
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




  return (
  <center>  <div>
    <div className='cover'>
    <img  src={petro} style={{marginTop:4}} alt='petro' width='100px' height="100px"/>
</div>
{cards.map((a,index)=>{
if(a.category ==='petro'){

return  <ArticleCard key={index} art={a}/>}
else{return null}})}


    </div></center>
  )
}

export default Petro
