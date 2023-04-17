import {useEffect,useState} from 'react'
import Slider from './Slider';
import SliderLoading from './SliderLoading';

const ImageCarousel = ({type,title}) => {
  const [images,setImages]=useState();
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const getImages = async ()=>{
      setLoading(true);
      await fetch(`../json-data/${type}.json`)
      .then(res=>res.json())
      .then(data=>setImages(data.quotes))
      .catch(err=>console.log(err));
      setLoading(false);
    }
    getImages();
  },[type]);

  if(loading){
    return <SliderLoading/> 
  }
  if(!loading && !images){
    return <></>
  }
  
  
  return (

    <div className="slider-card">
      <h2 className='carousel-title'>{title}</h2>
      <Slider images={images}/>  
  </div>


  )
}

export default ImageCarousel
