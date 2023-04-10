import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    
      <div className={styles.footer}>
        <Link to='/About' className={styles.aboutLink} >عن المجلة</Link>
      </div>
  
  )
}

export default Footer
