import {useState,useEffect} from 'react'
import Typography from'@mui/material/Typography'
import { Carousel } from 'react-carousel-minimal';
import ReactPlayer from 'react-player/facebook'
import {useParams} from 'react-router-dom';
import NotFound from '../NotFound'
import './event.css'
const Event = () => {
  const [articles , setArticles]=useState();
    useEffect(()=>{
    const getArticles = async ()=>{
      await fetch("../json-data/events.json").then(res=>res.json()).then(data=>setArticles(data.events))
      .catch(err=>console.log(err));

    }

    getArticles();
    },[]
    );


    const {id }=useParams();
    if(!articles){
      return <div className="loading"><center><h1 style={{color:'rgb(100,100,100)'}}>...Loading</h1></center></div>
    }
    else{
const article= articles.find((art)=> art.id === parseInt(id));

if(!article){
return <NotFound />
}


return (
  <div className='event'>
      <center>
      <Typography variant='h5' sx={{mt:4}}>{article.title}</Typography>
      <p style={{marginTop:1,color:'rgb(100,100,100)'}}>{article.date}</p>
      </center>

      <Carousel
            data={article.images}
            time={4000}
            width="850px"


            radius="10px"
            slideNumber={false}

            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "600px",

              margin: "40px auto",
              direction:'ltr'
            }} />

      <div className='event-body'>
          {article.body.map((b,index)=><p style={{lineHeight:2}} key={index}>{b}</p>)}
      </div>

  <center>
      <ReactPlayer url={article.videoUrl} controls wrapper='div' width="50%"height='50%' className='videos'/>
  </center>
    </div>
  )
}}

export default Event
