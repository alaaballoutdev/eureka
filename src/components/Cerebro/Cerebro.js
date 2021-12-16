import {useEffect,useState} from 'react'
import Video from './Video';
import './cerebro.css'
const Cerebro = () => {
const [msg, setMsg]=useState('please wait');
  const [cards,setCards]=useState([]);
  useEffect(()=>{
  const getCard = async  ()=>{
   await fetch("./json-data/cerebro.json").then(res=>res.json()).then(data=>setCards(data.videos))
  .catch(err=>console.log(err));

  }

  getCard();
  },[]
  );

setTimeout(()=>setMsg(''),3000);

  return (
    <div className='cerebro'>

<center>
<h2 style={{color:'rgb(100,100,100)'}}>{msg}</h2>
{cards.map((v,index)=><Video key={index} url={v.url} caption={v.caption}  />)}
</center>



</div>



  )
}

export default Cerebro
