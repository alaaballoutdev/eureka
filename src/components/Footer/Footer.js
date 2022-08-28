import {SocialIcon} from 'react-social-icons'
import Link from  '@mui/material/Link'
import './footer.css'
const Footer = () => {
  return (
    <footer>
    <SocialIcon url = "https://www.facebook.com/eurekaulfg3/"  className="social-icon"/>
  <SocialIcon url = "https://www.instagram.com/eureka_lu/" className="social-icon" />
<SocialIcon url = "eurekamagazineulfg@gmail.com" network='email' className="social-icon" />
<span>
<Link variant='overline' href='/About' className="f-about"
sx={{color:'white',textDecoration:'none',fontSize:18}}>عن المجلة</Link>
</span>
    </footer>
  )
}

export default Footer
