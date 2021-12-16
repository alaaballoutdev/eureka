import {useEffect,useState} from 'react'
import ArticleCard from './ArticleCard'
import './article.css';
const ArticlesCards = () => {

const [cards,setCards]=useState([]);
useEffect(()=>{
const getCard =  ()=>{
 fetch("./json-data/articles.json").then(res=>res.json()).then(data=>setCards(data.articles.reverse()))
.catch(err=>console.log(err));

}

getCard();

},[]
);



if(cards ===[]){

return <h1>Loading...</h1>

}



  return (

<center><div className="articles-cards">
{cards.map((card,index)=>card.id< 100 ? <ArticleCard key={index} art={card}/>:null)}
</div></center>


  )
}

export default ArticlesCards
