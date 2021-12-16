import {useEffect,useState} from 'react'
import { Carousel } from 'react-carousel-minimal';
import './home.css';
import Typography from '@mui/material/Typography'
const QuoteSlider = () => {
const [images,setImages]=useState();
useEffect(()=>{
const getArticles = async ()=>{
  await fetch("../json-data/QuoteSlider.json").then(res=>res.json()).then(data=>setImages(data.quotes))
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
<Typography variant="h6" sx={{mb:0}}>تأمل</Typography>
        <center>  <Carousel
                data={images}
                time={10000}
                width="100%"
                height="100%"


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
                  direction:'ltr',
                  mb:5

                }} />
</center>


</div>


  )
}}

export default QuoteSlider
