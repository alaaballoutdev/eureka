import React,{useEffect,useState} from 'react'
import { Carousel } from 'react-carousel-minimal';
import './home.css';
import Typography from '@mui/material/Typography'
const Know = () => {
  const [images,setImages]=useState();
  useEffect(()=>{
  const getArticles = async ()=>{
    await fetch("../json-data/Know.json").then(res=>res.json()).then(data=>setImages(data.know))
    .catch(err=>console.log(err));

  }

  getArticles();
  },[]
  );

  if(!images){

    return <h3  style={{textAlign:'center',color:'rgb(100,100,100)'}}>...Loading</h3>
  }
  else{



  return (
    <div className="slider-card">
    <Typography variant="h6" sx={{mb:0}}>هل تعلم</Typography>
              <Carousel
                    data={images}
                    time={10000}
                    width="300px"
                    height='225px'

                    radius="10px"
                    slideNumber={false}


                    automatic={true}
                    dots={false}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="black"
                    slideImageFit="cover"
                    thumbnails={false}
                    className='slider'
                    style={{
                      direction:'ltr'
                    }} />



    </div>
  )
}}

export default Know
