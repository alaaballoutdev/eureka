import {useState,useEffect} from 'react'
import {VideoCameraFront,FormatQuote} from '@mui/icons-material';
import Section from '../Articles/Section'
import './magazine.css';
import ArticleLoading from 'components/Articles/ArticleLoading';
import NotFound from 'components/NotFound';
const Interview = () => {
const [interview, setInterview]=useState();
const [loading,setLoading]=useState(true);
useEffect (()=>{
  async function fetchInterview(){
    setLoading(true);
    await fetch('./magazineJson/interview.json')
    .then(res=>res.json())
    .then(data=>setInterview(data))
    .catch(err=>console.log(err));
    setLoading(false);
  }
  fetchInterview()
},[]);

if(loading){
  return <ArticleLoading/>
}
if(!loading&&!interview){
  return <NotFound/>
}

  return (
    <>
      <div className="cover">
        <VideoCameraFront sx={{width:100,height:100}}/>
      </div>
      <div className="interview">
        <h1 >{interview.title}</h1>
        <p className='interview-date' >{interview.date}</p>
        <div className='dialog'>
          <FormatQuote/>
          <p>{interview.dialog}</p>
        </div>
        <div className='image-wrapper'>
          <img src={interview.image} alt='i' className="initial-image"/>
        </div>
        <div className="body">
          {interview.body.map((s,index)=>
            <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards} />)
          }
        </div>
      </div>
    </>
  )
}

export default Interview
