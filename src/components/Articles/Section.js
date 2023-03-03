
import ImageCard from './ImageCard'
import './article.css';
const Section = ({subtitle, paragraph,imagesCards}) => {
  return (
<>
  <h2 style={{marginTop:'5%',marginRight:'4%'}} className="subtitle">{subtitle}</h2>
<div  className="Section-flex">
<div className="text-flex">
  {paragraph.map((p,index)=><p style={{color:'rgb(20,20,20)'}} key={index} >{p}</p>)
}</div>

{imagesCards.map((c, index)=><ImageCard key={index} photo={c.photo} caption={c.caption}  />)}
</div>
</>

  )
}

export default Section
