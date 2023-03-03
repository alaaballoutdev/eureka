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

setTimeout(()=>setMsg(''),1000);
if(!cards){
  return <div className="loading" ></div>
}
  return (
    <div className='cerebro' style={{backgroundColor:'rgb(245,245,245)'}}>
      <h3 style={{color:'rgb(100,100,100)',textAlign:'center'}}>{msg}</h3>
      {cards.map((v,index)=>
        <Video key={index} url={v.url} caption={v.caption}  />
      )}
    </div>



  )
}

export default Cerebro
