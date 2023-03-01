import {Link} from  '@mui/material'
import './footer.css'
const Footer = () => {
  return (
    <footer>
  <div className='footer'>
<span>
<Link variant='overline' href='/About' className="f-about"
sx={{color:'white',textDecoration:'none',fontSize:18}}>عن المجلة</Link>
</span>
</div>
    </footer>
  )
}

export default Footer
