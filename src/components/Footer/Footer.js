import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <footer>
  <div className='footer'>
    <span>
  <Link variant='overline' to='/About' className="f-about"
style={{color:'white',textDecoration:'none',fontSize:18}}>عن المجلة</Link>
</span>
</div>
    </footer>
  )
}

export default Footer
