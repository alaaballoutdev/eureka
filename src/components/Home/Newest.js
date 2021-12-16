import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import CastIcon from '@mui/icons-material/Cast';
import {Link} from 'react-router-dom';
import './home.css';
import '../Articles/article.css';
const Newest = ({art,cat,icon}) => {
  return (

<div>
<Link     to={`/Articles/${art.id}`}  className="link">

<Paper elevation={2} className="link-paper mobile" sx={{padding:2,
  mt:3,
  mr:3,
  width:250
  ,height:350
  ,direction:'rtl'
  ,alignContent:'center'}}>

  <div style={{display:'flex'}}>
    {art.category !=='electrecity' && art.category !=='telecom'?
    <span style={{marginLeft:5}}>
      <img  width='30' src={icon} alt='i'/>
    </span>:
    art.category==='electrecity'?
      <ElectricalServicesIcon/>:<CastIcon />}

<span><Typography  variant='body1'sx={{color:'rgb(100,100,100)'}} >{cat}</Typography></span>
</div>
<h4 style={{marginTop:0,marginBottom:0}}>{art.title}</h4>
<p style={{color:'rgb(150,150,150)'}}>{art.author}</p>
<center><img src={art.image} alt='i' width='200'   /></center>
</Paper>
</Link>
</div>
  )
}

export default Newest
