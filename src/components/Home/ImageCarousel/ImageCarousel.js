import {useEffect,useState} from 'react'
import Slider from './Slider';

const ImageCarousel = ({type,title}) => {
  const [images,setImages]=useState();
  useEffect(()=>{
    const getImages = async ()=>{
      await fetch(`../json-data/${type}.json`)
      .then(res=>res.json())
      .then(data=>setImages(data.quotes))
      .catch(err=>console.log(err));
    }

  getImages();
  
},[type]
);


  return (

    <div className="slider-card">
      <h2 className='carousel-title'>{title}</h2>
      <Slider images={images}/>  
  </div>


  )
}

export default ImageCarousel
