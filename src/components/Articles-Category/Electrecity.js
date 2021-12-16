import {useEffect,useState} from 'react'
import ArticleCard from '../Articles/ArticleCard';

import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
const Civil = () => {

  const [cards , setCards]=useState([]);
    useEffect(()=>{
    const getCards = async ()=>{
       await fetch("../json-data/articles.json").then(res=>res.json()).then(data=>{
        setCards(data.articles);})
      .catch(err=>console.log(err));

    }

    getCards();
    },[]
    );





  return (
<center>    <div>

<div className='cover'>
<ElectricalServicesIcon fontSize='large' color='action' sx={{fontSize:100,color:'black'}} />

</div>

{cards.map((a,index)=>{
if(a.category ==='electrecity'){

return  <ArticleCard key={index} art={a}/>}
else{return null}})}

    </div></center>
  )
}

export default Civil
