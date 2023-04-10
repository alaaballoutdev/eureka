import { ArrowUpward } from "@mui/icons-material"
import styles from './ScrollToTop.module.css'
import { useEffect, useState } from "react"

const ScrollToTopButton = () => {
    const [scrollTop, setScrollTop] = useState(false);
    const handleClick =() =>{
        window.scroll(
            {
              top:0,
              left:0,
              behavior:'smooth'})
    }
    useEffect(() => {
      const handleScroll = (event) => {
        if(window.scrollY===0)
            setScrollTop(false);
        else setScrollTop(true);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    },[scrollTop]);
    

return (
    <>
    {scrollTop&&
    <button className={styles.scrollToTopButton} onClick={handleClick}>
        <ArrowUpward color="primary" fontSize="20px"/>
    </button>}
    </>
  )
}

export default ScrollToTopButton
