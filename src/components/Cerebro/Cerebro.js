import {useEffect,useState} from 'react'
import Video from './Video';
import './cerebro.css'
const Cerebro = () => {
const [msg, setMsg]=useState('Please Wait');
  const [cards,setCards]=useState();
  useEffect(()=>{
  const getCard =   ()=>{
    fetch("./json-data/cerebro.json").then(res=>res.json()).then(data=>setCards(data.videos))
  .catch(err=>console.log(err));

  }

  getCard();
  },[]
  );

setTimeout(()=>setMsg(''),3000);
if(!cards){
  return <div className="loading" ></div>
}
  return (
    <div className='cerebro' style={{backgroundColor:'rgb(245,245,245)'}}>

<center>
<h2 style={{color:'rgb(100,100,100)'}}>{msg}</h2>
{cards.map((v,index)=><Video key={index} url={v.url} caption={v.caption}  />)}
</center>



</div>



  )
}

export default Cerebro
