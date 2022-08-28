import {useEffect,useState} from 'react'
import ArticleCard from './ArticleCard'
import './article.css';
const ArticlesCards = () => {

const [cards,setCards]=useState();
useEffect(()=>{



async function fetchData (){
try{
let res= await fetch("../json-data/articles.json")
let data=await res.json();
setCards(data.articles);}

catch(err){
console.log(err);
}
}
fetchData();

},[]);



if(!cards){

return <div className="loading"><center><h3 >Loading...</h3></center></div>

}

else{

  return (

<center><div className="articles-cards" style={{marginTop:50}}>
{cards.map((card,index)=>card.id< 100 ? <ArticleCard key={index} art={card}/>:null)}
</div></center>


  )
}
}
export default ArticlesCards
