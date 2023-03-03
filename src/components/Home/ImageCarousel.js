import {useEffect,useState} from 'react'
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
      <h2>{title}</h2>
      <Slider images={images}/>  
  </div>


  )
}}

export default ImageCarousel
