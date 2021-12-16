import {useState,useEffect} from 'react'
import ArticleCard from '../Articles/ArticleCard';
import CastIcon from '@mui/icons-material/Cast';
const Telecom = () => {
  const [cards , setCards]=useState([]);
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




  return (
  <center>  <div>
    <div className='cover'>
    <CastIcon sx={{width:100,height:100}}/>
</div>
{cards.map((a,index)=>{
if(a.category ==='telecom'){

return  <ArticleCard key={index} art={a}/>}
else{return null}})}


    </div></center>
  )
}

export default Telecom
