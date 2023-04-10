import Skeleton from "react-loading-skeleton"
import styles from  './News.module.css'
const NewsLoading = () => {
  return (
    <div className={styles.newsPage}>
    <h1 className={styles.title}>أخبار الكلية</h1>     
        <Skeleton  width="90%" height={200} count={5}  className={styles.newsCardLoading}/>
    </div>
  )
}

export default NewsLoading
