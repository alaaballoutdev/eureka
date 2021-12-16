import Typography from "@mui/material/Typography";
import ImageCard from './ImageCard'
import './article.css';
const Section = ({subtitle, paragraph,imagesCards}) => {
  return (
<>
  <Typography variant="h5" sx={{color:'blue',mt:'5%',mr:'4%'}} className="subtitle">{subtitle}</Typography>
<div  className="Section-flex">
<div className="text-flex">
  {paragraph.map((p,index)=><p key={index} >{p}</p>)
}</div>

{imagesCards.map((c, index)=><ImageCard key={index} photo={c.photo} caption={c.caption}  />)}
</div>
</>

  )
}

export default Section
