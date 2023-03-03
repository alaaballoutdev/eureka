import {useState,useEffect} from 'react'
import petro from '../../images/petro.svg';
import ArticleCard from '../Articles/ArticleCard';
import './categories.css';
const Petro = () => {
  const [cards , setCards]=useState();
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


    if(!cards){

    return <div className="loading"><center><h3 >Loading...</h3></center></div>

    }




  return (
  <div className="petro">
  <center>  <div>
    <div className='cover'>
    <img  src={petro} style={{marginTop:4}} alt='petro' width='100px' height="100px"/>
</div>
{cards.map((a,index)=>{
if(a.category ==='petro'){

return  <ArticleCard key={index} art={a}/>}
else{return null}})}


    </div></center>
    </div>
  )
}

export default Petro
