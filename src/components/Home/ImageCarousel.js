import {useEffect,useState} from 'react'
import {Typography} from '@mui/material'
import Slider from './Slider';

const ImageCarousel = ({type,title}) => {
  const [images,setImages]=useState();
  useEffect(()=>{
    const getImages = async ()=>{
      await fetch(`../json-data/${type}.json`).then(res=>res.json()).then(data=>setImages(data.quotes))
      .catch(err=>console.log(err));
  }

  getImages();
  
},[type]
);

if(!images){

  return <h3  style={{textAlign:'center',color:'rgb(100,100,100)'}}>...Loading</h3>
}
else{
  return (

    <div className="slider-card">
      <Typography variant="h5" sx={{mb:1}}>{title}</Typography>
      <Slider images={images}/>  
  </div>


  )
}}

export default ImageCarousel
